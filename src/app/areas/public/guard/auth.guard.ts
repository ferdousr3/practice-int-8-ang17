import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //route - ActivatedRouteSnapshot
  //State - RouterStateSnapshot

  const path = route.url[0].path;
  if (path === 'developer/front-end/react') {
    return true;
  } else {
    return false;
  }
};
