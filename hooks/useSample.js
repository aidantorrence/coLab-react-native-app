import { useContext } from 'react';
import SampleContext from '../contexts/SampleContext';

export default function useSample() {
  return useContext(SampleContext);
}
