import NextAuth, { NextAuthOptions } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? '',
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID ?? '',
      clientSecret: process.env.KEYCLOAK_SECRET ?? '',
      issuer: process.env.KEYCLOAK_ISSUER ?? '',
    }),
  ],
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
