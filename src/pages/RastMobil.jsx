import React, { useState } from "react";
import YeniHesapEkle from "../companents/modals/YeniHesapEkle";
import { Container, SearchRow } from "./RastMobil.style";
import DataGridObje from "../companents/chart/DataDridObje";

const RastMobil = () => {
  const [socialMediaList, setSocialMediaList] = useState([]);
  return (
    <Container>
      <SearchRow>
        {/* Ebeveyn'den child'e props gönder */}
        <YeniHesapEkle setSocialMediaList={setSocialMediaList} />
      </SearchRow>
      <DataGridObje socialMediaList={socialMediaList} />
    </Container>
  );
};

export default RastMobil;
