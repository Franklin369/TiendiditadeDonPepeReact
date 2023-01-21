import { useForm } from "react-hook-form";

import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import { db } from "../api/firebase.config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { AiFillPicture } from "react-icons/ai";
import {
  InsertarProductos,
  SubirimagenStorage,
  EditarurlImg,
} from "../api/productos";

import { Spinner } from "../Components/Spinner";
export function Productosconfig() {
  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [images, setimages] = useState([]);
  const [profileUrl, setProfileUrl] = useState([]);
  const [idproducto, setIdproducto] = useState({});
  const [file, setFile] = useState([]);
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  // const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function handleOnClickProfilePicture() {
    ref.current.click();
  }

  async function PsubirimgStorage(e) {
    //cargar a local
    var filelist1 = e.target.files;
    var fileReader1 = new FileReader();
    fileReader1.readAsDataURL(filelist1[0]);
    const tipoimg = e.target.files[0];
    if (tipoimg.type.includes("image/png")) {
      if (fileReader1 && filelist1 && filelist1.length) {
        fileReader1.onload = function load() {
          setProfileUrl(fileReader1.result);
          console.log(fileReader1.result);
        };
      }
    }

    var fileList = e.target.files;
    var fileReader = new FileReader();

    if (fileReader && fileList && fileList.length) {
      fileReader.readAsArrayBuffer(fileList[0]);
      fileReader.onload = async function () {
        var imageData = fileReader.result;
        setFile(imageData);
        // const res = await SubirimagenStorage("yesss", imageData);
        //swal(res);
        // if (res) {
        //   swal(res);
        //   // const tmpUser = { ...currentUser };
        //   // tmpUser.profilePicture = res.metadata.fullPath;
        //   // setCurrentUser({ ...tmpUser });

        //   // await updateUser(currentUser);
        //   // const url = await getProfilePhotoUrl(currentUser.profilePicture);
        //   // setProfileUrl(url);
        //   //updateUserProfilePhoto(currentUser.uid, res.fullPath);
        // }
      };
    }
  }
  async function Insertarprod(data) {
    setLoading(true);
    const p = {
      descripcion: data.descripcion,
      precio: data.precio,
      imagen: "-",
      idcategoria: "recien",
    };
    const id = await InsertarProductos(p);
    setIdproducto(id);
    const res = await SubirimagenStorage(id, file);
    setProgress(res);
    await EditarurlImg(id, res);
    setLoading(false);
    swal("Registro exitoso");
  }

  return (
    <Container>
      <div className="sub-contenedor">
        {loading ? <Spinner /> : ""}

        <div className="header">
          <h1>📤Registro de productos</h1>
        </div>
        <div className="profilePictureContainer">
          <img
            src={profileUrl}
            alt=""
            data-toggle="modal"
            data-target="#ModalPreViewImg"
          />
          <Btnguardar onClick={handleOnClickProfilePicture}>
            <AiFillPicture />
            <span>Cargar imagen</span>
          </Btnguardar>

          <input
            accept="image/png"
            ref={ref}
            type="file"
            onChange={PsubirimgStorage}
          ></input>
        </div>
        <form className="entradas" onSubmit={handleSubmit(Insertarprod)}>
          {/* <button className="btn" onClick={handleOnClickProfilePicture}>
                Elige una nueva foto de perfil
              </button> */}
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Descripción:</h4>
              <Inputs
                type="text"
                {...register("descripcion", { required: true })}
                className="input"
                placeholder="Ingrese  una descripción"
              ></Inputs>
            </div>

            {errors.descripcion?.type === "required" && (
              <p>💩Ingrese una descripción</p>
            )}
          </ContainerInputs>
          <ContainerInputs>
            <div className="subcontainer">
              <h4>Precio: S/.</h4>
              <Inputs
                type="number"
                {...register("precio", {
                  required: true,
                })}
                className="input"
                placeholder="Ingrese un precio"
              ></Inputs>
            </div>

            {errors.precio?.type === "required" && <p>💩Ingrese un precio</p>}
          </ContainerInputs>

          <div className="footercontent">
            <Btnguardar className="btnguardar" onClick={Insertarprod}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Enviar</span>
            </Btnguardar>
          </div>
        </form>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  background-color: #f9f8f8;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;

    h2 {
      height: 100%;
    }

    span {
      font-size: 40px;
      cursor: pointer;
      text-align: center;
      height: 100%;
      align-items: center;
      transform: translateY(-15px);
    }
  }
  .sub-contenedor {
    width: 80%;
    border-radius: 10px;
    background-color: #e7ebf0;
    padding: 10px 20px;
    /* box-shadow: 0px 5px 10px rgba(240, 249, 250, 0.5); */
    margin: 0px 20px;
    .profilePictureContainer {
      padding: 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-direction: column;
      img {
        width: 100px;

        object-fit: cover;
      }
      input {
        display: none;
      }
    }

    .entradas {
      .footercontent {
        display: flex;
        align-items: center;
        height: 100%;
        gap: 20px;
        margin-top: 20px;
        justify-content: center;

        /* .input {
          border: 2px solid #e8e8e8;
          padding: 15px;
          border-radius: 10px;
          background-color: #212121;
          font-size: small;
          font-weight: bold;
          text-align: center;
          transform: translateY(10px);
          text-align: start;
          width: 50%;
        } */

        /* .input:focus {
          outline-color: white;
          background-color: #212121;
          color: #e8e8e8;
          box-shadow: 5px 5px #888888;
        } */
      }

      .picker-container {
        position: relative;

        .emoji-icon {
          cursor: pointer;
          position: absolute;
          top: 8px;
          right: 5px;
          color: white;
        }
        .input-style {
          text-decoration: none;
          border-style: none;
          padding: 7px 30px 7px 10px;
          width: calc(100% - 40px);
          border-radius: 5px;
          min-height: 200px;

          margin-bottom: 10px;
        }
      }
    }

    .contenido {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 20px;
      flex: auto;
      .icon {
        margin-right: 10px;
      }
      .mensaje {
        .title {
          font-weight: bolder;
        }
      }
    }
    .actions {
      padding: 10px 0;
      display: flex;
      justify-content: end;
      gap: 10px;
      button {
        border: none;
        padding: 15px;
        min-width: 120px;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
      }
      .btn-descargar {
        background-color: #029be1;
        color: white;
        &:hover {
          background-color: #0280de;
        }
      }
      .btn-volver {
        background-color: white;
        border: solid 1px #ccc;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
`;
const Inputs = styled.input`
  border: 2px solid #e8e8e8;
  padding: 15px;
  border-radius: 10px;
  background-color: #212121;
  font-size: small;
  font-weight: bold;
  text-align: center;
  color: white;
  text-align: start;
  width: 70%;
  &:focus {
    outline-color: white;
    background-color: #212121;
    color: #e8e8e8;
    box-shadow: 5px 5px #888888;
  }
`;
const ContainerInputs = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: start;
  align-items: center;

  flex-direction: column;
  .subcontainer {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
const Btnguardar = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 600;
  font-size: 17px;
  padding: 0.8em 1.3em 0.8em 0.9em;
  color: black;

  background-color: #fbfefc;
  border: none;
  letter-spacing: 0.05em;
  border-radius: 16px;
  svg {
    margin-right: 3px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  span {
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }
  &:hover {
    color: #262524;
    svg {
      transform: translateX(5px) rotate(90deg);
    }
    span {
      transform: translateX(7px);
    }
  }
`;
