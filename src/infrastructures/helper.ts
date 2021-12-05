class ApiHelper {
  constructor() {}

  get = async <T extends {}>({ path }: { path: string }): Promise<T> => {
    const res = await fetch(path, {
      method: 'GET',
    });
    return res.json();
  };

  post = async <T extends {}>({
    path,
    body,
  }: {
    path: string;
    body: T;
  }): Promise<void> => {
    await fetch(path, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  };

  put = async <T extends {}>({
    path,
    body,
  }: {
    path: string;
    body: T;
  }): Promise<void> => {
    await fetch(path, {
      method: 'PUT',
      body: JSON.stringify(body),
    });
  };

  delete = async ({ path }: { path: string }): Promise<void> => {
    await fetch(path, {
      method: 'DELETE',
    });
  };
}

export const apiHelper = new ApiHelper();
