import { useEffect, useState } from "react";
import { getDocumentsWhere } from "../firebase/firestore.hook";
import { Tree } from "../types";

export function useTree() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Tree[]>();
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const tree = await getDocumentsWhere(
          "Arbores",
          "propuesta_senlleira",
          true,
        );
        if (!tree.length) throw new Error("Not Tree found");
        // console.log(tree);
        setData(tree);
        // console.log(tree);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else if (typeof err === "string") {
          setError(err);
        } else {
          setError("Unkwnow Error");
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return {
    data,
    error,
    loading,
  };
}
