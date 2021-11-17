type SignIn = {
  accessToken: string;
};

export const signInUser = async (): Promise<SignIn> => {
  const response = await fetch('sign-in');
  const { data } = await response.json();
  return data;
};
