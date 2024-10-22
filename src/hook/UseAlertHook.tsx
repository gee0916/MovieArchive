import { useAtom } from "jotai";
import { alertAtom } from "@/state/alertAtom";

export default function useAlert() {
  const [isAlert, setAlert] = useAtom(alertAtom);

  const clickAlert = (message?: string) => {
    setAlert((prev) => ({
      isVisible: !prev.isVisible,
      message: message || prev.message,
    }));
  };

  return { isAlert, clickAlert };
}
