import React from "react";
import {
  FaLaptopCode,
  FaBolt,
  FaUserFriends,
  FaChalkboardTeacher,
  FaClock,
  FaCertificate,
  FaStar,
} from "react-icons/fa";
import TfaApproach from "../component/TfaApproach";
import ReviewCard from "../component/ReviewCard";
import FAQSection from "../component/FAQSection";

const reviews = [
  {
    initial: "N",
    name: "Navneet Gill",
    date: "12 November 2025",
    review:
      "I have been taking classes from Love Bhatia for the last 2 months. He explains everything clearly and makes French easy.",
    color: "#f87171",
  },
  {
    initial: "K",
    name: "Khushpreet Kaur",
    date: "7 January 2024",
    review:
      "Learning French has become enjoyable. The teaching method is very structured and exam-focused.",
    color: "#60a5fa",
  },
  {
    initial: "A",
    name: "Alieza Garcia",
    date: "7 April 2025",
    review:
      "Amazing teachers! Very patient, inspiring and supportive throughout the journey.",
    color: "#a78bfa",
  },
];

const CourseInfo = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white text-gray-800">
      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Canada’s Leading{" "}
              <span className="text-red-600">Fast-Growth</span>
              <br />
              French Language Institute 🇨🇦
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Canadian-owned since <strong>2018</strong>, trusted by{" "}
              <strong>1,000+ learners</strong> with{" "}
              <strong>200+ certified tutors</strong>.
            </p>

            <p className="mt-4 text-gray-600">
              Achieve <strong>CLB 7+</strong> through structured TEF / TCF
              preparation and secure Canadian PR confidently.
            </p>

            <button className="mt-8 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:shadow-lg transition">
              Book Free Demo
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA9wMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAMEBgcCAf/EAD4QAAIBAwMCBAQDBQcDBQEAAAECAwAEEQUSIQYxEyJBURQyYXEHgZEjUqGxwRUkQ3LR4fBCYvElMzRTYxb/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAJxEAAgICAgEDBAMBAAAAAAAAAAECEQMxEiEEIjJBExRCUSNx8AX/2gAMAwEAAhEDEQA/AKGel74dk4rhun7+M4EJ+4FaekIVBj+dOpH/AOaiXMhu9PmtP/eQjPuKjBArYIya0XrmFV09WC+bPJqiKPpXNjJWSdGG66C4wKe6iQLcoKd0JA98ABzinOqEAuk964HyVmRMtxXSrSkzuIHeu4Qc+aiAWDXQ5HFdmHPrXYTaOKAUDZEcuSGxXmyT9+iC2hkBcV6bNx60WKlYN2P6ua88Nv3yanm2Yd+a4eFhjijYaI1urCQeY0TTzYBqIqYfnvUq388qovL+vsKlknRfDjT7ZKitoZFw6vj6GmLvp9JF32lwwb92Q9/zqzaX05PdDLXDIMf9K/f/AFNTH6cvYwTbXEc+3srjBP51l+u1Lpm77bE1TRmM1hdQP4cyMp9M+tci0mP/AE8VoPhx3jSWd1GYZ0PKOOVPuKrl4sltPLbyAEoeD7itePNz6ezz/I8b6XafRXUhZpfD7U+dPlBwKcthvvwaMMg3GrNmVIB/2fLXhsJMdxRzZXDxEKW9MV3I5oEaehEzAnOKLDbkHFD9NANzJntmioRScAZpJbKw0NOU+lN+baMYNSZIEIzimnVVA8tAY5Cr6gUy6KTT5XgkDt9abccD3NcdZGcKle10yZ+YUqNCWbeqjYPpTkafSlHGCKlQx9q46yr9dJ/6aPvWelWPGOK0b8QRs01T7tWegMT349qDKR0EumIz/aHbgDiu+rU/vicipPTCn4w8cYrnqyMG8Un61wK9RU2jJc45rvYQK6JKyEY4pzIIogGhn3pZNOBc9+K72jFD5DQQ06JGtSWIpuYKCdrCotrYTyxs6y7RntXB06fJHi5pqFi3XSHSOfmBrnA9cUydNuB/iU21hOM5koHNsj3Um3eRwWO0VO0GO5a5jaC2EzeuWxmhV2jJcRxnkhskUd0OzfxBcKXOxgQoOBUclKPZpx25JI0np65t72AwmDwZ0baVVs5NKW+ukvfgY4rKHGTh2Jb74qs9I/GSdSF41IViS3sPtVlv+nYZ9UW7dCZCdxjfIyfyIzWLpSo2rk0mB+u7Qppi6uVVL2zZQzIeHQnB/nVW11kuYra8XH7WLDH6itD6h0g3WhPp6Hw0coPUhRuHvWYavA6WNvaIzDwS5ORg8ngEehwK0YfU0Z/I6xtP/MD2IBvhRttu88igdlbvLdbVOCPWp7adc7jiQ1uZ5aZM49xTdx/7TcjtUb+zbr/7DTU9hcrGS0hwKFBsb0mLxJpMnGDRZEVCSAe1DNDQmRxnnOKOSR7CB3pXstFdEUxkx5plk8Qhc4qawZF3MPLTMjhsBf1oIZojNBtc8nGK4ePgEEjFSyDnk969dAACcYoiogsgdRyQRSp2aLz+SvK442+JfLmpMYI7Uoo/JT8aVwhUfxBcCwjDDPmqgKw27scVoX4hRhbKI9/NVA2YXce2e1BlIB/pUB7liPao3VY/9QUfQ1N6NXfPI1ReqxnUfsprvgP5FWlXLnFcxxndz2p1gfENJhzXHVQmWvfDx2JrodhTjMBGSO+KC2DoJadE5tScVw6kMRzTFlq8sFvsEBb64rmTVGdsmBs/ajQqaSH3jOO9d6fb28+fiJMfSoB1NvWFv0plr+MEfs3BNckc5Jrok69Y2yr4sJ3unbFNaNqfwdvJ3y3tya8jmWdxjd+dQTJ8Df8AbKNzjHcZqeSFlsM3Et/SJmlv45oElKRqdoQse5yc4+vpV1vLpLeOCKaMRyu2UC5D59SAe9Vfoe9u7Z3FlcP4L/4Yb5avd3Mgh8a4GZMcsxyR9qyTUTeuXTB8t+8UglvJY4oo85Zh34PpWUXzGWW5l5xI7MMn3OatXWV0fh7ZpMrFLIxUMO+PX+NVK4nh8B8OM4rR40KjZi8uab4oF6KN2oNmj87iPvVe0txHdSMTRfxEnQlnH61sejCiVGd6ZFM3ikwOMelPwNGkYXetN306x27FGU8UtDMB6OrB39OTR+23M+ZOVoLpMhYvIV7ntRqCQtlduBnilmVhoemXcPMvlqDPbkOPDogH8UbGHHvUeVhFJjbmkRRkYRM3zDtSnCiMYqUibvMDj6UxNHxtA9aNgSIjcEevFKnWCqcN3pVx2jbkk4+YYp1ZB++v61jGtdXapbIscU3nYd/agcPVWuxyF/jX59+1OkQe6NY6/kU20Khsnd2FUqFdw8ykc03Hql5qUKy3Tl3A4p6JJimQpz9alJmmCosvSUYE0mBihfVCk6kcfunijPR6HdLuHNBeqdw1N9vfbTL2ifmysOy+Ieefaux5hUJIDJI7B/Nu+WpoRwKW/gdxdWdInmVT61KvLeOKIbDUQNhwrtiu550MTZeitiPQZ0mJDajKj9Kl/Dwk8qv6UB07VYkg27+xrq91xIV8hyaanYiqg8LGEgnYv6VCntLbPMS9/Sq7/wD1Mp4I4p+HWkn5kO0D1o0/kHRNuYY4pB4QWMDkk1Xbm5jv7lkjUjw/LuJ711rWoLdI0URYKDy5GM0OsIyJsqQMHBP8q5xtBU6LB03d61bXwg0wJJJ2G6tS03RtUnxP1BepLhRstoRhQf8Au9SazfQ1MOqbjL8PIpDA/Wr5d9b6Zp1svxMxmmP+HCMsf9Puaw5HJypI9DHSjybBn4uqIdN06YRqVWdl29uCv+1Z6kVtPbNJGzAjup9D7Vdtd6osOp9OS3+GuUXf5hLGMdvQgkZ+9VXQNDuLyW/jgkJAiYx5HzMvOP0BrVhdLi1Rj8hJvmnYHs4g7PzipXw8aYAlIz9a5it57QEzxMof5T3FSUtPFVWz61obM1HgsWIBWc/rTN3aSxws3jZGO2aKCMIoz3xUC/JMD5oBoWhAGE84waNxxFxuV8YoLo20QZJxmiYaQqWiYbfWpy2Vh0iWUcD5hTCyDxSH5x7154rbF2t5q6iWPcS/rSKyra+D1iNm9T2peLHIqgfNUabxAhCrhc8VyyhIVfGTTUTsekVN3PelUVpi8gG0jilRpHcmVi5uXuZi79zUvT4RdXCRMQM8c0PAOeBUm28RZlMROfpTy0Sh3LsuvgwWSrHkYAxmn1vIFQLHIv61Cmsbi70oS4fxB6YquraXwYYWUYOO1RSvZr51pGtdF3EBWU7l4PvQjqKWOXUJSgBwMZqp2D3lhGxd3VT+VPPrUIkKtJU5zlqKL4sELcpsHeJLa3pZ0YKx44onHvdS4HHpVu6YTS9bsyJFR2Q88c0K6j+FtJ2isgAAvP0oNtLlXZ0YQlJxvoomqXMsl2yKxH2qBI8q5UscHuM1IllVr1mPvxUe5Hnz6Vri9HnSS7aJFkyeKA5ODU3ULZNgMLEkjtQmIjeM0ejRdo5yQMkV0rs6FcW2RINKcqrTN5jxtFT3gCJhVxgelTpo/Bt7UH53y7fSmJSNhB49alNu6BDVgK5TMTHsd3f/AJ+dSNOuYYbuJnGUaPDf5sd/1onDYeJb+deAcH+f9a4h6Ye5l/YMREO7MMYP0qydE+SH5dTjuGnnjUAKikZHt3/pQ7SxDcStcXKkoMs2Dyx/2FFpunTBC8Vu7NkcnHeg8OlajFK0MVvJITkYA9CKVRptlY5VLjF6LNJrcMNlFbi0WQSf4bLhIx7e5P1qy9LWU0KNeyRiLxUIgT/t9SR/ztQjpzpe9mltDrCrFBFkrHuBLZOcHHpmr3uDwruABhbDY9B2/rT9IlkyOTKBpyq+lwrNEGIXByK4n0aSZWfTkBZRnwycZ+1P6YpNoy45SV0P5MaJ6fMtvIzP8ojbP5DNYYNqdGmXssobeIJ5YbgNDIhwyOMFTUS83LA6s+fatT616XTWNPe9t4wNQhTcGXgyKO4PvWRXcZjXmQkegNa9MgnyQU0aM+FHu7UQ2uNwUDZmgFprIghEZjyR617aXs810NpJVucVzQ6losojjUIwwTXqRByxb0prCxOhOTx2pFvEYlW249Kmix1Mw8MLgimyqqEBP5GnCwcIueRTbpIZVLcgGiA8fDOQPSlXmPOxFKuoKYC0Cya51SK2deJPLn2q3N0XJpuowuxDKWB4r3pLRzHZSX8yESg7VX2PvVuDGQjxTk7RirYEs03EjmvDCMv2E47SIRKAi4wPSuJLK35JhX9K9tryJYQHPIr2W+t9uSwxQlHjKgKTasqfXMcFvosjbApJ4NZQmWOW71a/xA14anfC1t3zBF3+pqqKC5wK5JIDk2FtE1O50m9Sa2JwfmUeoovq10ZszrnMvOPaneldMR7d7qSPcy+h7CouoypPOdoCJngCsuWSb/o34U4Qt/IGhsQ7NLK4VF5JNQp2V22xLlfQ0R1QgWuFbuewqDagBS45IPar4++2Zc1RfFEfBVhketWnQrZpEC3MbI0iNtB9eM/yzQW6iQxZA8xFWs3TXuJY12PbJFsH+VcH+NUZndpHOryI8VhIp7xtu+/FR7WH4q6iiHYnLH6DvXutgi1SaAZh3eIoxymfmB/Ou9Ecm3Mg+eRtoPsAP96k4+qxlL0ll0aySeW7fH7LeAvtwBRWdURNkQHsB7VH011h06KGLsxLZ9cf85qdFHukDsOF7fWqEDlbaO3t3kkxkDJzTVsix2TXJG1pX449K81FmupoLRO8rYP2p/WHCfD26fKuOBXACBJMCsD25p6UEESxjPHnH7wpiI7oFH0xUi3zt255FE4pVmnh3Wo2+eEuWIx6g8g/xrpwRLDEM5kkCH7Z5/hmp2pQiHqCcKNqzQq4H1BIP9KGXdykFzEfmZdxC+57AfxrFX8ptv8AiNDs7hdseCCfX7ev+lYt1/o7aXr9xAoPgSMZoT7of9DkflWp6fKVjihY5kkG5j7KOT/z60E/Ey0S70qC+I88ADZH7jcf0BrW9GfG++zH/DxgYPJovoqeG75XJA/jXdppkmoXUSwKBuIXPtzWuaf+GtpFYoDM5lK+Zge5pVLkjQ4cXbM/ijkyrMeB71y0UsjM8a+X6Vfn/D5oz+zuSR7ECgur9OX+kW0k+UaFaWmOpJgCGE7efmr1U3EhuCKb8doXD+/ek1x4zPt74oUNaB8lyySOADgGlUkW5ZMgd6VMkI07LhbarZrDIhcRyckoabgvQ7/NkehrPLq4e7ufimJBcZ4NWvppllsf2hJdTin8NLBJtnebKWaKRc9KmshEzXTqp/7qCdZa7aR2jWmlqstxIvLL2Sm7ya2htmmnQOEHagfSGgSdUajcSndDYl/Q4J+lHPkVuRLFDpRKMsMryucFjnk/WpdvY3HhtKIn8vPy+lbzpnRujaaQILdS3u3NTNT0u0GnzqkCLuQjhaxS8t30jRDDFbKl+HelxydL3E91g71O0e3FZNf3DG6lCtgByB+tbbNAOlunJJrYl0ZOEPvisKMbXF0WcbfEck5Huabx/U3JjZZNJKI3LKZEAJ9a6tyEXce3rTmoRpDMscfOBzTMWNuPSta10ZZW5dhLTYvjtTtbfK7ZJAMk8VZowLXXJo2wULtE2O2M4pjo6DQ/EDX+7xQQRxxXoCyXBwSBIrYI++RU1LlIbJHjjHr63Is5UHy8gn2b/ehOizFLeOLneWdR9DuqxO4eI7gMsu1x9RVMs5PDvZvVUkYp+dUM6NGsZA2SOFUBR+XFTlvAqkluF71WNMnRItzPhcc80VsbdryRWnysGchPV/8AaiLQZ0rDPLqLj5hshU/u+/5modw5l1HnnHf6VLu7hUhVV8qr6fyqFagtBcXTdywUUABu1fyE+lTrYb1JU5qFbAfBbyK70uQxxzyd9hBx9K4AM6ykSK80+bbhmV0P8DVR064S5v3v3XcieWIe9G/xQ8a3ktrtSzQCJ4xjsrMODVf6QkVoYFZeF4FLwXLkV5PhRdLdpILd5JW/vM/H+UewoprtnHPp62knlWaAR5Ppx/4oCr+LqlpBkks2T9qtHUIxFEfQEKfpxTNX0T00cdNdIWWjWwG3xnYDdI/OTVohQRoFUnAHHND9JuxPpkMxbJAKN9wcVPhkD9q+Z+rkx5nb7PZpTij13AOOBVY65mH9gzrk8jAoxq3kdWDFQaEXdzayQulwd6qeQBmvocWT6mNMwyjxkZSE2upd+DT7hA+UwF9a0fSNL0fV98xtwYkO0Er3NWG36R0O3cSrZQlsZBK03Gw80jF7iTwkwq4+/FKpPXepRX+uXTW67YIm8JNvY4717Q4h5lFVmVdpJx7VaOnJ9kMqE85BoHHpd/K//wAWTH+XFWTQtCvkLPKpQEcZFMumc+0c6qZZ7C5VecDNM9AdT3ukSLbLsaEnhWFGb7TWS1kVpDlvYVF0iw0eO5RNQDxsvynsDSZEpLiDHJKVs0O06jS5nBmVY8DjBp/VdRjaFijMwA5C+tQbRNKghMkEYdAOW711Fq2jzOEiuYQ/baTzWePit7ZeWaN3ECzjV9bj8AQlLde271FQbzo13tZJJRFCYxnPpV6E0aRlvFUgDPBqu6pqhvIGSMfs+2D61qx+LFEZ+U0jFrxWW4cscnJGaYjOCM/LRvqe1ihud8YKhj29KBemKo1ToinfYR029e0vY3xuXOGU9jVijIUW7Y7KOar2m23xRY7Sdib/AKcUejdgjRHDAncprhZki8udqM2eNtVS3kDIdwyc/wBaM3Tb0aN9wJFA4VMbMp964ES79O2PxGiTan4674b5YPBK58uwHd/HFWS3nVS5xwF8tQfww/vOha/alA7K0U0an97kf0H6U68vGCu1hwePWhfdAlFrs8mc3UqRL8zHLH2FTZQLfTVjXu8namdPjXezHuRXtxL4l7BCPRqIgfRNmmgHsa60cZaeM9nj7V1cDZZIPtXGnHZdK3ucUDgH+IirJ0y8BGZNwCn681S+l5BDDHz5cbs/Wrr12392Qf8A6gn9azjTbhYQ1uHAdJGQZP14ojLtF/6XJu9aluDykQ25q5a5+0tnP51V+kIRaxhD8z8tkdzVn1Pm22n/AKhQEYP6ZuJpoprOJN7/ADgfz/pVptLe5XO9MVQumr6Sz6gtzgkmTw3VRk7T64rVc8Y9K8/L/wA3FlyPI32bMXkyjDjRV+p9BvdZihigujbqG87Dvip2jaLa6Tp626r4jY87ycljRdz2rhxnitmLx44o0gzzymqYxa28cedsaquc4AqJ1TqH9m6BfXefNHCdv3PA/jRMDiqZ+Ktx4PTfg5x40qj9Of6VbSJfJjZjkKYLZydxJ9TSr2MvIhCJ5QcUqmV6NJstdtbqFnj8EkcDiuzqEpjIbaVz2A7VXIrWbaF3ogznyLUyGzIHmldvzxSrQ0n+iW+uWEb7J3iyO4I5pPqugTHzeGx+i1DfS4pWZ/CQSH1K5qJPYXkXKQoQPWMUb/ZJoMwSaXA4ntxIg9t2Afyp2dtKvHST4O3Mw7NgZqoTTuhIljkBHcEVIsSskZmUneCCBTRTbo5tRRang8WJlfETxnyqvGRQ6+/u1vvRyPoaMW1xDqdqsgI8VAFOKEazFIyFEA+tbYxpGSTtlA6ocyHearsfzGrN1JHth4583pVcjjZnVQpOT6VnnsvDRa+h7B7+4uYYztAt3yfby1FtLkzRr4gUZGeK0T8L9DFnp8t7KMvP6H92s9v7P+ydbvLDnbBKyxk+qZ8v8MVPNFxhaLYZRlOmTLCW1hvJ0v0Ro5Ld1jdxnZJjKkUCwjSMjfvA5I5Aohfp4sJOOaE20knxybCu4jad3Y1KE24j5MajNVovXQuoQ6JNffDs7yXkapGh+UMGyP6/rR/UbOe7vHmjspoXOCRs4aqn0pbC51uPDfDSRDeeOD+Va7Bdqi7XkVyBjIPJrJPI1PZujijLHVFGt4Z7NXNzE0YHqw70xpsnxGo+I/yhgo+9X68WG5iIJXkYKH1+9CIenNODKVUxkHcAhxzVIeUvyMk/Bt+hjuoSbIFU9gKbSSMRq5IGKk3WkpPG6NdTAHvjH+lDY9C+JlninuZpYoyNhJ2kj2OPtVPuoCfY5Cu9a3qNMi7sgrn71Tbawln/AG7bm23DbI9p4UjO79eK1MdMW6kCOFMD9/LfxNSo+n4UALuoHsKnLy3+KLQ8GK90gHoM842N4E28EcFcD9atjRC5CQvuRWIGAeeT70wgtbUbVO4+5qZpn94vYfXLDt7d6VZ5SklY/wBnjgm6LHZ2FtYxiO2t0iBHJCjJ+pNSB9Tk16Tk1zXonmnJ+ek3zCvcYbPpXI559KFjIgandyqfh7IDxCOXI+Ws+/Fd5k0zTormTLM7E4GM8d6uXUvUmmdObXvgfEkB2Kqklqzb8UtSbUTp0x8qtGWVfbNB6CkVrR5Y4rYgsPm9aVCFby9/415S2E0fT3M0AkYAH6UQjRTzSpUGOPBFC16FBIpUq4A1c2sL+V0DA+9A9QtYbO8gW3TYr7sgGvaVGOxJaK1r2qXmkXcRsJjGXPm+tWK31G4vNI8aYrvK8kDvXlKqwbsnNLiV++jWe2k8T0GRig2mRIJ4ZcZZiAc9qVKqT2gQ0bf0aCdNt4Sx2kEZ9RVS/FXRLOxt7XUIA/xDzeEzM2dy0qVTy6Hxe4o8TF0w3rQm6jUX0SjgM4B/UUqVY8W2bcvsLf0j5OqoICS6qDt3dxWmS/tZ1jbgMMnbxSpVkze424vaNMuF4Y/NipW9oFBjPP1pUqhouzl7yXI+Xn6VAtb6bxbnBA+XsO/LUqVcJJKkdTX9wikq+DQaXUrp5Cpk4pUqCH+B2FmLKzkuc58xqz9BE3M13cSnzxkRoB2APf8AOlSrZ46XNGPy5Pgy06jM1taySRgbkQkZrL9N6t1jVdZnhluBFFFnasK4B++c0qVekeStGkaFNJc2avM25q9vriSJH2YGFJ7UqVIxkZR+Kdw9xpukySY3HcSR9qCdZktp2jse/gUqVKU/EqLHFKlSrhT/2Q=="
              alt="Students learning French"
              className="rounded-2xl shadow-lg w-full h-[420px] object-cover"
            />
            <div className="absolute -bottom-6 left-6 bg-white p-5 rounded-xl shadow-lg border border-red-100">
              <p className="text-sm text-gray-500">Success Rate</p>
              <p className="text-2xl font-bold text-red-600">92%</p>
              <p className="text-xs text-gray-500">CLB 7+ Achievers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaLaptopCode />,
                text: "Specialized TEF & TCF Exam Prep (A1–B2)",
              },
              {
                icon: <FaBolt />,
                text: "Fast-Track Programs (6–10 Months)",
              },
              {
                icon: <FaUserFriends />,
                text: "Live One-on-One & Small Groups",
              },
              {
                icon: <FaChalkboardTeacher />,
                text: "Personalized Coaching & Mentorship",
              },
              {
                icon: <FaClock />,
                text: "Flexible Morning & Evening Schedules",
              },
              {
                icon: <FaCertificate />,
                text: "C1 & C2 Certified Instructors",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border rounded-xl p-6 bg-white flex gap-4 items-start
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-red-600 text-3xl group-hover:scale-110 transition">
                  {item.icon}
                </span>
                <p className="font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-red-600">200+</p>
            <p className="font-semibold">Certified Tutors</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-600">1,000+</p>
            <p className="font-semibold">Active Learners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-red-600 flex justify-center gap-1">
              4.9 <FaStar />
            </p>
            <p className="font-semibold">Average Rating</p>
          </div>
        </div>
      </section>

      {/* ================= STUDENT AVATARS ================= */}
      <section className="py-12">
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Learners from Toronto, Vancouver, Calgary & Montreal
          </p>
          <div className="flex justify-center gap-4">
            {[10, 20, 30, 40, 50].map((i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                alt="Student"
                className="w-12 h-12 rounded-full border-2 border-white shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Online French Class Options
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <PricingCard
            title="Group Classes"
            price="$270"
            duration="10–12 Months"
            features={[
              "20 Classes / Month",
              "Mon–Fri (8–9 PM EST)",
              "Group Size: 4–5",
              "A1 to B2 Levels",
            ]}
          />

          <PricingCard
            title="Individual Classes"
            price="$320"
            duration="8–10 Months"
            highlight
            features={[
              "12 Classes / Month",
              "Flexible Timings",
              "1:1 Coaching",
              "A1 to B2 Levels",
            ]}
          />

          <PricingCard
            title="Individual (Intensive)"
            price="$430"
            duration="6–8 Months"
            features={[
              "20 Classes / Month",
              "Fast-Track Learning",
              "1:1 Intensive Coaching",
              "A1 to B2 Levels",
            ]}
          />
        </div>
      </section>

      <TfaApproach />

      {/* ================= REVIEWS ================= */}
      <section className="py-20">
        <h2 className="text-center text-3xl font-bold mb-12">
          Trusted by Learners Across Canada
        </h2>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {reviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

/* ================= PRICING CARD ================= */
const PricingCard = ({ title, price, duration, features, highlight }) => (
  <div
    className={`relative border rounded-2xl p-8 text-center bg-white
    transition hover:shadow-xl hover:-translate-y-1
    ${highlight ? "border-red-500 scale-105" : ""}`}
  >
    {highlight && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs px-4 py-1 rounded-full">
        Most Popular
      </span>
    )}

    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-red-500 mt-1">{duration}</p>

    <p className="text-5xl font-bold mt-6">{price}</p>
    <p className="text-gray-500">Per Month</p>

    <ul className="mt-6 space-y-3 text-left">
      {features.map((f, i) => (
        <li key={i}>✔ {f}</li>
      ))}
    </ul>

    <button className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow hover:shadow-lg transition">
      Enroll Now
    </button>
  </div>
);

export default CourseInfo;
