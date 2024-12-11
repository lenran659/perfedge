'use client'

import { useState } from "react";
import Button from "@/components/ui/Button";
interface DebounceButtonProps {
  target: number;
}
const DebounceButton: React.FC<DebounceButtonProps> = ({ target }) => {
    const sendRequest = () => {
        setTimeout(() => {
            console.log('返回网络请求');
        }, 500);
    }
  const [count, setCount] = useState(0);

  const handleClick = (target: number) => {
    setCount(target);
    sendRequest();
  }
  return <Button type="primary" onClick={() => handleClick(target)}>DebounceButton</Button>;
};

export default DebounceButton;
