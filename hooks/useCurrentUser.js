import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function useCurrentUser() {
  return useContext(UserContext);
}
