import React from "react";
import { Button } from "react-bootstrap";

const Productos = ({producto}) => {
  return (
    <>
      <tr>
        <td>{producto.ID}</td>
        <td>{producto.titulo}</td>
        <td>{producto.descripcion}</td>
        <td>{producto.categoria}</td>
        <td className="d-flex justify-content-between">
            <Button type="button" variant="warning">Editar</Button>
            <Button type="button" variant='danger'>Elimanr</Button>
        </td>
      </tr>
    </>
  );
};

export default Productos;
/*Hi there,
 
Do a hard reset of your Google Chrome web browser.
 
Follow the steps here below to uninstall Google Chrome:
1. Go to your software list, and uninstall Google Chrome from the list
http://windows.microsoft.com/en-us/windows/uninstall-change-program#uninstall-change-program=windows-7
2. Go to this location:
C:\Users\YOUNAME\AppData\Local\Google\
C:\Program Files (x86)\Google\
3. And delete that "Chrome" folder (for both locations, if there is a Chrome folder)
4. Restart your computer
5. Install Google Chrome from www.google.com/chrome
 
Thanks,
Stefan*/