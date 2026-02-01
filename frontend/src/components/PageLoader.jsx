import { LoaderIcon } from "lucide-react";
import { useThemeStore } from "../store/useThemeStore";

const PageLoader = () => {
  const { theme } = useThemeStore();
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      data-theme={theme}
    >
      <LoaderIcon className="animate-spin w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary" />
    </div>
  );
};

export default PageLoader;
