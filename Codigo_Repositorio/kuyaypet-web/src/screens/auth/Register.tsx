import { Lock, Mail, User } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card } from '@/components/ui';
import { register } from '@/services/auth';
import { toast } from '@/services/ui';
import { AuthShell, Field, FormAlert, SocialLogin } from './shared';

type FieldName = 'name' | 'email' | 'password' | 'confirm';
const FIELD_ORDER: FieldName[] = ['name', 'email', 'password', 'confirm'];

/** Per-field wording: empty field vs. the specific rule that failed. */
const EMPTY_MSG = { name: 'Escribe tu nombre.', email: 'Escribe tu correo.', password: 'Crea una contraseña.', confirm: 'Repite la contraseña.' } as const;
const RULE_MSG: Record<string, string> = {
  email: 'Usa un correo como nombre@correo.com, sin repetir uno ya registrado.',
  password: 'Usa al menos 8 caracteres.',
  confirm: 'Debe ser igual a la contraseña.',
};

export function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState<{ error: string; field?: string } | null>(null);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const r = register(form);
    if (!r.ok) {
      setError(r);
      // Land on the first field that needs attention (UX-07).
      const first = (r.field && FIELD_ORDER.includes(r.field as FieldName) ? r.field : FIELD_ORDER.find((f) => !form[f])) ?? FIELD_ORDER[0];
      requestAnimationFrame(() => document.getElementById(first)?.focus());
      return;
    }
    toast({ title: '¡Cuenta creada con éxito!', body: 'Ahora cuéntanos sobre ti para encontrar tu match.', tone: 'success' });
    navigate('/onboarding');
  };

  const bad = (f: string) => !!error && (error.field === f || (!error.field && !form[f as keyof typeof form]));
  const msg = (f: keyof typeof EMPTY_MSG) => (!form[f] ? EMPTY_MSG[f] : RULE_MSG[f]);

  return (
    <AuthShell title="Registro de usuario" subtitle="Completa los siguientes datos para crear tu cuenta." hu="HU-01">
      <form onSubmit={submit} noValidate>
        <Card className="space-y-4 p-4">
          <Field id="name" label="Nombre completo" icon={<User size={20} />} value={form.name} onChange={set('name')} autoComplete="name" placeholder="Ej. Valeria Torres" error={bad('name')} message={msg('name')} />
          <Field id="email" label="Correo electrónico" type="email" icon={<Mail size={20} />} value={form.email} onChange={set('email')} autoComplete="email" placeholder="nombre@correo.com" error={bad('email')} message={msg('email')} />
          <Field id="password" label="Contraseña" type="password" icon={<Lock size={20} />} value={form.password} onChange={set('password')} autoComplete="new-password" placeholder="Mínimo 8 caracteres" error={bad('password')} message={msg('password')} />
          <Field id="confirm" label="Confirmar contraseña" type="password" icon={<Lock size={20} />} value={form.confirm} onChange={set('confirm')} autoComplete="new-password" placeholder="Repite tu contraseña" error={bad('confirm')} message={msg('confirm')} />
          {error && <FormAlert>{error.error}</FormAlert>}
        </Card>
        <Button type="submit" size="lg" block className="mt-5">
          Registrarse
        </Button>
      </form>
      <SocialLogin verb="regístrate" />
      <p className="mt-8 text-center text-cocoa-500">
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login" className="rounded font-bold text-terra underline underline-offset-4">
          Iniciar sesión
        </Link>
      </p>
    </AuthShell>
  );
}
