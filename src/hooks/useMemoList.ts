import React, {useEffect} from 'react';
import {Memo} from '@/appTypes';

const useMemoList = (setMemos: React.Dispatch<React.SetStateAction<Memo[]>>) => {
  useEffect(() => {
    const storedMemos = localStorage.getItem('memos');
    const doesIdExist = localStorage.getItem('currentId') !== null;

    if (!doesIdExist) {
      localStorage.setItem('currentId', '0');
    }

    if (storedMemos !== null){
      setMemos(JSON.parse(storedMemos));
    }
  }, [setMemos]);
};

export default useMemoList;