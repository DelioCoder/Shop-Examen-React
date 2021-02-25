import React from 'react'

import { data } from '../data';

export default function ProductScreen(props) {

    console.log(data.id == props.match.params.id);

    return (
        <>
          {
              data.map(dress => (
                  dress.id == props.match.params.id && 
                  <div className="col-lg-12" key={dress.id}>
                      <div className="row pt-5">
                        <div className="col-lg-7">
                            <ul className="thumb">		
                            <li><a href={dress.imagen_1} target="imgBox"><img src={dress.imagen_1} /></a></li>
                            <li><a href={dress.imagen_2} target="imgBox"><img src={dress.imagen_2} /></a></li>
                            </ul>	
                            <div className="imgBox"><img src={dress.imagen_1} /></div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-3">			
                            <div className="title"><h5 style={{color: '#363636'}}>{dress.name}</h5></div>
                            <div className="content">
                            <i className="icon-phone icon-color" style={{paddingRight: '15px'}} />01-3598587		
                            </div>
                            <div className="barra mt-3" style={{height: '1px', backgroundColor: '#999999'}} />
                            <div className="content mt-3">
                            <i className="icon-whatsapp icon-color" style={{paddingRight: '15px'}} /> 962369114		
                            </div>
                            <div className="barra mt-3" style={{height: '1px', backgroundColor: '#999999'}} />
                            <div className="content mt-3">
                            <i className="icon-envelop icon-color" style={{paddingRight: '15px'}} />elvin_tc@hotmail.com
                            </div>
                            <div className="barra mt-3" style={{height: '1px', backgroundColor: '#999999'}} />
                            <div className="title mt-5"><h5 style={{color: '#363636'}}>SOLICITAR INFORMACIÓN</h5></div>
                            <div className="gray-form bg-dark mb-5" style={{width: '340px', height: '550px'}}>
                            <form action>
                                <div className="col-lg-12" style={{height: '20px'}} />
                                <div className="form-group col-lg-12">
                                <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
                                </div>
                                <div className="form-group col-lg-12">
                                <input type="text" className="form-control" id="telefono" placeholder="Telefono" />
                                </div>
                                <div className="form-group col-lg-12">
                                <input type="text" className="form-control" id="correo" placeholder="Example@gmail.com" />
                                </div>
                                <div className="form-group col-lg-12">
                                <textarea name className="form-control" id="mensaje" style={{minHeight: '200px'}} placeholder="Mensaje*" defaultValue={""} />
                                </div>
                                <div className="g-recaptcha ml-3" data-sitekey="6LfgMKsZAAAAAGGWjDDWWqlS6CgKjf8Djn2Myf-u" />
                                <div className="col-sm-12 " style={{paddingBottom: '30px', paddingTop: '20px'}}>
                                <center><button className="btn btn-danger" style={{width: '290px'}}>Enviar</button></center>
                                </div>					
                            </form>
                            </div>
                        </div>
                    </div>
                  </div>
              ))
          }  
        </>
    )
}
