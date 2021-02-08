import { useEffect } from "react";
import { useRouter } from "next/router";

type nextRedirectsprop = {
  href: string;
  condition?: boolean;
  fallBack?: string;
};

export default function NextRedirects({
  href,
  condition,
  fallBack,
}: nextRedirectsprop) {
  const router = useRouter();
  useEffect(() => {
    condition !== undefined
      ? router.replace(
          condition === true ? href : fallBack ? fallBack : router.asPath
        )
      : router.replace(href);
  }, [condition]);
  return null;
}
