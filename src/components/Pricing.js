import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Pricing.css';


function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className='pricing__section'>
                    <div className='pricing__wrapper'>
                        <h1 className='pricing__heading'>Preços</h1>
                        <div className='pricing__container'>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <FaFire />
                                    </div>
                                    <h3>Iniciante</h3>
                                    <h4>$8.99</h4>
                                    <p>por mês</p>
                                    <ul className='pricing__container-features'>
                                        <li>100 Transações</li>
                                        <li>2% de CashBack</li>
                                        <li>$10.000 de Limite</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>Escolha o Plano</Button>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Gold</h3>
                                    <h4>$29.99</h4>
                                    <p>por mês</p>
                                    <ul className='pricing__container-features'>
                                        <li>1000 Transações</li>
                                        <li>3.5% de CashBack</li>
                                        <li>$100.000 de Limite</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>Escolha o Plano</Button>
                                </div>
                            </Link>
                            <Link to='/sign-up' className='pricing__container-card'>
                                <div className='pricing__container-cardInfo'>
                                    <div className='icon'>
                                        <GiCrystalize />
                                    </div>
                                    <h3>Premium</h3>
                                    <h4>$99.99</h4>
                                    <p>por mês</p>
                                    <ul className='pricing__container-features'>
                                        <li>Transações Ilimitadas</li>
                                        <li>5% de CashBack</li>
                                        <li>Cartão Ilimitado</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>Escolha o Plano</Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Pricing