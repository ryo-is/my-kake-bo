class ApiHelper {
  constructor() {}

  get = async <T extends {}>({ path }: { path: string }): Promise<T> => {
    const res = await fetch(path);
    return res.json();
  };
}

export const apiHelper = new ApiHelper();
