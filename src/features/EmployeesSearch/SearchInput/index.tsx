import { ChangeEventHandler, useEffect, useState } from 'react';
import { useEmployeeStore, useEmployeesStore } from '@/entities/employee';
import { useDebounce } from '@/shared/hooks';
import { Input } from '@/shared/ui';

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue);

  const { search, reset } = useEmployeesStore();
  const { resetUser } = useEmployeeStore();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      search(debouncedSearchValue);
    } else {
      reset();
      resetUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  return <Input value={searchValue} onChange={handleInputChange} placeholder="Введите Id или имя" />;
};
