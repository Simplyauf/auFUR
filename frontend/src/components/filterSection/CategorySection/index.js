import { CategoryLists } from "./categoryLists";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Index = ({ getSelectedCategoryDetailsCallbackFN }) => {
  const [isCategorySectionOpen, setIsCategorySectionOpen] = useState(false);

  // THE MAPPED JSON TO CREATE THE CHECKBOX AND CATEGORY UI
  const productCategories = {
    "Featured Categories": ["featured", "first order deal", "discounts"],
    location: ["kitchen", "dining", "bedroom", "living room", "office"],
    features: ["chairs", "tables", "sets", "cupboards", "lighting", "sofa"],
    others: ["kids"],
  };

  // LOOP THROUGH THE DESCENDANTS WHILE SKIPPING THE EVENT TARGET AND GET THE CHECKBOXES DOM
  const handleCheckedCategory = (e) => {
    let descendants = e.currentTarget.getElementsByTagName("*");
    for (let i = 0; i < descendants.length; i++) {
      if (descendants[i] == e.target) {
        continue;
      }
      descendants[i].checked = false;
    }

    if (e.target.checked) {
      getSelectedCategoryDetailsCallbackFN(
        e.target.parentElement.parentElement.previousElementSibling.firstElementChild.textContent,
        e.target.value,
        e.target
      );
    } else {
      getSelectedCategoryDetailsCallbackFN(null, null, e.target);
    }
  };

  return (
    <article className="flex flex-col gap-4 ">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px] font-bold">Categories</h3>
        {isCategorySectionOpen ? (
          <RiArrowDropUpLine
            className=" w-8 h-6 cursor-pointer"
            onClick={() => setIsCategorySectionOpen(!isCategorySectionOpen)}
          />
        ) : (
          <RiArrowDropDownLine
            className="w-8 h-6 cursor-pointer"
            onClick={() => setIsCategorySectionOpen(!isCategorySectionOpen)}
          />
        )}
      </div>
      {isCategorySectionOpen && (
        <div className="flex flex-col gap-4 w-[100%]" onChange={(e) => handleCheckedCategory(e)}>
          {Object.keys(productCategories).map((categoryTitle, index) => {
            return <CategoryLists key={index} {...{ categoryTitle, productCategories }} />;
          })}
        </div>
      )}
    </article>
  );
};

export default Index;
