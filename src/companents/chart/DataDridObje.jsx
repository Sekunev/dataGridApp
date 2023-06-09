import React, { useEffect, useState } from "react";
import DataGrid, {
  FilterPanel,
  Pager,
  Paging,
} from "devextreme-react/data-grid";
import InputGroup from "react-bootstrap/InputGroup";
import mercek from "../../assest/mercek.png";
import { Button, Icon, Input } from "./DataDridObje.style";

const columns = ["SosyalMedyaLinki", "SosyalMedyaAdı", "Açıklamalar"];

const DataGridObje = ({ socialMediaList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(socialMediaList);

  useEffect(() => {
    //! İlk render'da socialMediaList değişirse filteredList'i güncelle
    setFilteredList(socialMediaList);
  }, [socialMediaList]);

  const handleSearch = () => {
    const filteredList = socialMediaList.filter((item) =>
      Object.values(item).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredList(filteredList);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //! Input veri girişi sonrası Enter ile-event
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const marginStyle = {
    marginLeft: "1rem",
    marginRight: "1rem",
  };

  //! DataGrid'de 2 veya 4 satır gösterimi olsun
  const allowedPageSizes = [2, 4];

  return (
    <div style={marginStyle}>
      <InputGroup className="mb-1">
        <Input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search Objects"
        />
        <Button onClick={handleSearch} id="button-addon2">
          <Icon src={mercek} alt="" />
        </Button>
      </InputGroup>
      <DataGrid
        dataSource={filteredList ? filteredList : socialMediaList}
        // keyExpr="ID"
        defaultColumns={columns}
        showBorders={true}
      >
        <Pager
          allowedPageSizes={allowedPageSizes}
          showPageSizeSelector={true}
          showNavigationButtons={true}
        />
        <Paging defaultPageSize={4} />
        <FilterPanel visible={true} />
      </DataGrid>
    </div>
  );
};

export default DataGridObje;
