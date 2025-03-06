import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useNavigateBack = (fallbackUrl) => {
  const location = useLocation();
  const navigate = useNavigate();

  const locationKey = location.key;

  const navigateBack = useCallback(() => {
    if (locationKey === "default")
      // this tells us that the user landed on this page directly
      navigate(fallbackUrl, { replace: true });
    else navigate(-1);
  }, [fallbackUrl, locationKey, navigate]);

  return navigateBack;
};