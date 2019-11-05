import { useStoreState, useStoreActions } from 'easy-peasy';

export default function useCloseMobileMenu() {
  const isMobileMenuOpen = useStoreState((state) => state.isMobileMenuOpen);
  const toggleMobileMenu = useStoreActions(
    (actions) => actions.toggleMobileMenu
  );

  return function() {
    if (isMobileMenuOpen) toggleMobileMenu();
  };
}
