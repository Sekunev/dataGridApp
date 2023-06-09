import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, InputGroup, Input, Cont } from "./YeniHesapEkle.style";

//! SosyalMedyaLinki, SosyalMedyaAdı ve Açıklamalar adında üç özelliğe sahip olan bir SocialMedia veri modeli Bu modelsen aşağıda yeni objeler oluşturacağız.

class SocialMedia {
  constructor(SosyalMedyaLinki, SosyalMedyaAdı, Açıklamalar) {
    this.SosyalMedyaLinki = SosyalMedyaLinki;
    this.SosyalMedyaAdı = SosyalMedyaAdı;
    this.Açıklamalar = Açıklamalar;
  }
}

const YeniHesapEkle = ({ setSocialMediaList }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [SosyalMedyaLinki, setSosyalMedyaLinki] = useState("");
  const [SosyalMedyaAdı, setSosyalMedyaAdı] = useState("");
  const [Açıklamalar, setAçıklamalar] = useState("");

  //! useEffect; Component yüklendiğinde yerel depodan "socialMedia" verisini alarak, socialMediaList state'ini güncellemeyi amaçlar. Böylece, sayfa yeniden render edildiğinde veya bileşenin yeniden oluşturulduğunda, yerel depodaki veri ile socialMediaList güncellenmiş olur.
  useEffect(() => {
    const storedData = localStorage.getItem("socialMedia");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setSocialMediaList(parsedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! handleSubmit; Form submit edildiğinde Yukarıda oluşturulan modelden yeni objeler oluşturmayı amaçlar.

  const handleSubmit = (event) => {
    event.preventDefault();

    //? Yeni SocialMedia objesi oluştur
    const socialMediaObject = new SocialMedia(
      SosyalMedyaLinki,
      SosyalMedyaAdı,
      Açıklamalar
    );

    //! Önceki verileri al.
    const mevcut = JSON.parse(localStorage.getItem("socialMedia")) || [];

    //! Yeni veriyi ekleyerek güncelle.
    const updatedList = [...mevcut, socialMediaObject];

    //! veriyi (updatedList) tarayıcının yerel depolama alanına(localStorage) kaydet.
    localStorage.setItem("socialMedia", JSON.stringify(updatedList));

    //!Formu temizle
    setSosyalMedyaLinki("");
    setSosyalMedyaAdı("");
    setAçıklamalar("");

    //! Güncellenmiş listeyi SocialMediaList state'inde sakla.
    setSocialMediaList(updatedList);
  };
  return (
    <Cont>
      <Button onClick={handleShow}>+ Yeni Hesap Ekle</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} id="socialMediaForm">
            <InputGroup>
              <label>Sosyal Medya Linki</label>
              <Input
                type="text"
                value={SosyalMedyaLinki}
                onChange={(e) => setSosyalMedyaLinki(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label>Sosyal Medya Adı</label>
              <Input
                type="text"
                value={SosyalMedyaAdı}
                onChange={(e) => setSosyalMedyaAdı(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label>Açıklamalar</label>
              <Input
                type="text"
                value={Açıklamalar}
                onChange={(e) => setAçıklamalar(e.target.value)}
              />
            </InputGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Vazgeç
              </Button>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Kaydet
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </Cont>
  );
};

export default YeniHesapEkle;
