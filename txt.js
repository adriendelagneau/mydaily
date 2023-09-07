async jwt({ token, user, account }) {
  if (account) {         
    const userLoggedIn = await SignToken(user?.email as string);
    token.loggedUser = userLoggedIn;
  }
  return token;
},
async session({ session, token, user }) {
  session.loggedUser = token.loggedUser;
  return session;
},


session: async (session) => {
  if (!session) return;

  const client = await connectToDatabase();
  const usersCollection = client.db().collection('users');
  
  const userData = await usersCollection.findOne({
    email: session.user.email,
  });

  return {
    session: {
      user: {
        id: userData._id,
        firstname: userData.firstname,
        lastname: userData.lastname,
        username: userData.username,
        email: userData.email
      }
    }
  };
},