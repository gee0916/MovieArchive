import { useAtom } from "jotai";
import { modalAtom } from "@/state/modalAtom";

export default function useModal() {
  const [isModal, setModal] = useAtom(modalAtom);

  const clickModal = (type?: string) => {
    setModal((prev) => ({
      isVisible: !prev.isVisible,
      type: type || prev.type,
    }));
  };

  return { isModal, clickModal };
}
