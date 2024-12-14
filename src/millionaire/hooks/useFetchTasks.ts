import { useEffect, useState } from 'react';
import fetchGameTasks from '../api';
import { MillionaireConfig } from '../types';

export default function useFetchGameConfig() {
  const [tasks, setTasks] = useState<MillionaireConfig | null>(null);

  useEffect(() => {
    fetchGameTasks()
      .then((response) => {
        setTasks(response);
      });
  }, []);

  return tasks;
}
