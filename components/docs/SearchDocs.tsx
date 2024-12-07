"use client";

import Mask from "@/components/ui/mask";
interface SearchDocsProps {
  setIsSearch: (show: boolean) => void;
}

const SearchDocs: React.FC<SearchDocsProps> = ({ setIsSearch }) => {
  return <Mask setShowMask={setIsSearch}>123</Mask>;
};

export default SearchDocs;
