// HU-12: edit the textual info of an owned pet. Reflects instantly on PetProfile via the reactive store.
import { Camera, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Chip, EmptyState, PageHeader } from '@/components/ui';
import { PERSONALITY_OPTIONS } from '@/data/petTags';
import { useCurrentUser } from '@/services/auth';
import { processPhotoBatch, MAX_PET_PHOTOS } from '@/services/media';
import { updatePublication } from '@/services/publications';
import { toast } from '@/services/ui';
import { ageExact, usePet } from '@/services/pets';

export function EditPet() {
  const { id } = useParams();
  const user = useCurrentUser();
  const pet = usePet(id);
  const navigate = useNavigate();
  const [form, setForm] = useState(() => ({
    name: pet?.name ?? '',
    breed: pet?.breed ?? '',
    ageMonths: pet?.ageMonths ?? 0,
    about: pet?.about ?? '',
    story: pet?.story ?? '',
    specialCare: pet?.specialCare ?? '',
    photos: pet?.photos ?? [],
    personality: pet?.personality ?? [],
  }));
  const [error, setError] = useState('');
  const [photoError, setPhotoError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  // Offer the standard options plus any legacy tag the pet already carries, so it can still be removed.
  const tagOptions = [...PERSONALITY_OPTIONS, ...(pet?.personality ?? []).filter((t) => !PERSONALITY_OPTIONS.includes(t))];
  const toggleTag = (t: string) => setForm((f) => ({ ...f, personality: f.personality.includes(t) ? f.personality.filter((x) => x !== t) : [...f.personality, t] }));

  const onFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const { dataUrls, error: err } = await processPhotoBatch(files, form.photos.length);
    setPhotoError(err);
    setForm((f) => ({ ...f, photos: [...f.photos, ...dataUrls] }));
    if (fileRef.current) fileRef.current.value = '';
  };

  if (!pet || !user || pet.ownerId !== user.id)
    return (
      <div className="h-full pt-10" data-hu="HU-12">
        <EmptyState emoji="🔍" title="Mascota no encontrada" action={<Button onClick={() => navigate('/responsable')}>Volver</Button>} />
      </div>
    );

  const save = () => {
    if (!form.name.trim()) {
      setError('El nombre no puede estar vacío.');
      return;
    }
    const result = updatePublication(pet.id, form);
    if (!result.ok) {
      setError(Object.values(result.errors)[0] ?? 'Revisa los datos.');
      return;
    }
    toast({ title: 'Cambios guardados con éxito', tone: 'success', emoji: '✅' });
    navigate(`/mascota/${pet.id}`, { replace: true });
  };

  return (
    <div className="h-full" data-hu="HU-12">
      <div className="scroll-area h-full">
        <div className="flex min-h-full flex-col">
          <div className="flex-1 px-4">
            <PageHeader
              back="/responsable"
              title="Editar información"
              subtitle={`${pet.breed} · ${pet.district}`}
              aside={pet.photos[0] ? <img src={pet.photos[0]} alt="" className="h-14 w-14 rounded-2xl bg-cream-200 object-cover shadow-soft" /> : undefined}
            />
            <Card className="space-y-4 p-4">
              <div>
                <label htmlFor="name" className="label">
                  Nombre *
                </label>
                <input
                  id="name"
                  className={`input ${!form.name.trim() ? 'ring-2 ring-coral' : ''}`}
                  aria-invalid={!form.name.trim()}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="breed" className="label">
                  Raza
                </label>
                <input id="breed" className="input" value={form.breed} onChange={(e) => setForm({ ...form, breed: e.target.value })} />
              </div>
              <div>
                <label htmlFor="age" className="label">
                  Edad en meses
                </label>
                <input id="age" type="number" min={0} className="input tabular-nums" value={form.ageMonths} onChange={(e) => setForm({ ...form, ageMonths: Number(e.target.value) })} />
                <p className="mt-1.5 text-xs text-cocoa-600">{form.ageMonths > 0 ? `Equivale a ${ageExact(form.ageMonths)}` : '1 año = 12 meses'}</p>
              </div>
            </Card>
            <Card className="mt-4 space-y-4 p-4">
              <div>
                <label htmlFor="about" className="label">
                  Descripción / Sobre mí
                </label>
                <textarea id="about" rows={3} className="input resize-none" value={form.about} onChange={(e) => setForm({ ...form, about: e.target.value })} />
              </div>
              <div>
                <label htmlFor="story" className="label">
                  Historia
                </label>
                <textarea id="story" rows={3} className="input resize-none" value={form.story} onChange={(e) => setForm({ ...form, story: e.target.value })} />
              </div>
              <div>
                <label htmlFor="care" className="label">
                  Cuidados especiales
                </label>
                <textarea id="care" rows={2} className="input resize-none" value={form.specialCare} onChange={(e) => setForm({ ...form, specialCare: e.target.value })} />
              </div>
              {error && (
                <p role="alert" className="rounded-2xl bg-coral-100 px-4 py-2.5 text-sm font-semibold text-coral-700">
                  {error}
                </p>
              )}
            </Card>
            <Card className="mt-4 space-y-4 p-4">
              <div>
                <p className="label">Fotos (máximo {MAX_PET_PHOTOS})</p>
                <div className="grid grid-cols-4 gap-2">
                  {form.photos.map((src, i) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-2xl bg-cream-200" data-testid="edit-photo">
                      <img src={src} alt="" className="h-full w-full object-cover" />
                      <button
                        type="button"
                        aria-label="Quitar foto"
                        onClick={() => {
                          if (form.photos.length <= 1) {
                            setPhotoError('La mascota debe tener al menos una foto.');
                            return;
                          }
                          setPhotoError('');
                          setForm({ ...form, photos: form.photos.filter((_, idx) => idx !== i) });
                        }}
                        className="pressable absolute right-1 top-1 rounded-full bg-white/90 p-1 shadow-raised"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                  {form.photos.length < MAX_PET_PHOTOS && (
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="pressable flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-cocoa/20 text-cocoa-500 hover:border-terra hover:text-terra"
                      aria-label="Agregar foto"
                    >
                      <Camera size={22} />
                    </button>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
                {photoError && (
                  <p role="alert" className="mt-2 rounded-2xl bg-coral-100 px-4 py-2.5 text-sm font-semibold text-coral-700">
                    {photoError}
                  </p>
                )}
              </div>
              <div>
                <p className="label">Personalidad</p>
                <div className="flex flex-wrap gap-2">
                  {tagOptions.map((t) => (
                    <Chip key={t} active={form.personality.includes(t)} onClick={() => toggleTag(t)}>
                      {t}
                    </Chip>
                  ))}
                </div>
              </div>
            </Card>
            <div className="h-6" aria-hidden />
          </div>

          <div className="glass sticky bottom-0 z-10 grid grid-cols-2 gap-3 px-4 pb-safe-b pt-3">
            <Button block variant="outline" onClick={() => navigate('/responsable')}>
              Cancelar
            </Button>
            <Button block variant="success" onClick={save}>
              Guardar cambios
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
