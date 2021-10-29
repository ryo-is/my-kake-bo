class ApiHelper {
  constructor() {}

  get = async <T extends {}>({ path }: { path: string }): Promise<T> => {
    const res = await fetch(path, {
      method: 'GET',
    });
    return res.json();
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
}

export const apiHelper = new ApiHelper();
