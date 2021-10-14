class ApiHelper {
  constructor() {}

  get = async <T extends {}>({ path }: { path: string }): Promise<T> => {
    const res = await fetch(path, {
      method: 'GET',
    });
    return res.json();
  };
}

export const apiHelper = new ApiHelper();
