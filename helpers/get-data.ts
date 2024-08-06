// Función para manejar la solicitud de datos y obtener la respuesta
export const getFetchData = async (url: string) => {
  try {
    const res = await fetch(url);
    return await handleResponse(res);
  } catch (error) {
    return handleError(error);
  }
};

// Función para manejar la respuesta de la solicitud
const handleResponse = async (res: Response) => {
  if (!res.ok) {
    throw new Error(`Error: ${res.statusText} (Status code: ${res.status})`);
  }

  const data = await res.json();
  return {
    data,
    errorMessage: "",
    isError: false,
  };
};

// Función para manejar los errores
const handleError = (error: unknown) => {
  const errorMessage =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "Unknown Error";

  return {
    data: null,
    errorMessage,
    isError: true,
  };
};
