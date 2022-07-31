import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import style from '../styles/footer.module.css';

const Footer = () => (
  <footer className={ style.footer }>
    <nav className={ style.nav }>
      <section className={ style.store }>
        <Link className={ style.store_link } to="/">Loja</Link>
        <section className={ style.links_store }>
          <Link className={ style.link } to="/">Vinhos</Link>
          <Link className={ style.link } to="/">Outras bebidas</Link>
        </section>
      </section>
      <section className={ style.club }>
        <Link className={ style.club_link } to="/">CLUBE WINE</Link>
        <section className={ style.links_club }>
          <Link className={ style.link } to="/">Vinhos</Link>
          <Link className={ style.link } to="/">Outras bebidas</Link>
          <Link className={ style.link } to="/">Como funciona</Link>
          <Link className={ style.link } to="/">Indique Amigos</Link>
          <Link className={ style.link } to="/">WineBox Essenciais</Link>
          <Link className={ style.link } to="/">WineBox Surpreendentes</Link>
          <Link className={ style.link } to="/">WineBox Notáveis</Link>
          <Link className={ style.link } to="/">WineBox Singulares</Link>
          <Link className={ style.link } to="/">WineBox Espumantes</Link>
          <Link className={ style.link } to="/">WineBox Refrescantes</Link>
        </section>
      </section>
      <section className={ style.account }>
        <Link className={ style.account_link } to="/">MINHA CONTA</Link>
        <section className={ style.links_account }>
          <Link className={ style.link } to="/">Dados pessoais</Link>
          <Link className={ style.link } to="/">Pedidos</Link>
          <Link className={ style.link } to="/">Cartões</Link>
          <Link className={ style.link } to="/">Endereços</Link>
          <Link className={ style.link } to="/">Clube Wine</Link>
          <Link className={ style.link } to="/">Favoritos</Link>
          <Link className={ style.link } to="/">Cupons</Link>
          <Link className={ style.link } to="/">Presentes</Link>
          <Link className={ style.link } to="/">Indique amigos</Link>
        </section>
      </section>
      <section className={ style.also }>
        <Link className={ style.also_link } to="/products">CONHEÇA TAMBÉM</Link>
        <section className={ style.links_also }>
          <Link className={ style.link } to="/">Institucional</Link>
          <Link className={ style.link } to="/">Lojas Oficiais</Link>
          <Link className={ style.link } to="/">Lojas Físicas</Link>
          <Link className={ style.link } to="/">Bodegas</Link>
          <Link className={ style.link } to="/">App Wine</Link>
          <Link className={ style.link } to="/">WineUP</Link>
          <Link className={ style.link } to="/">Wine Eventos</Link>
          <Link className={ style.link } to="/">Podcast</Link>
          <Link className={ style.link } to="/">Winepedia</Link>
          <Link className={ style.link } to="/">Team Wine</Link>
          <Link className={ style.link } to="/">Trabalhe na Wine</Link>
          <Link className={ style.link } to="/">Portal de Privacidade</Link>
          <Link className={ style.link } to="/">Preferência de Cookies</Link>
        </section>
      </section>
    </nav>
    <aside className={ style.aside }>
      <h2>Alguma dúvida? A gente ajuda você!</h2>
      <p>Horário de atendimento:</p>
      <p>De segunda a sexta-feira de 09h as 18h. Exceto feriados.</p>
      <p>
        <a href="http://localhost:3000">Políticas de trocas e devolução</a>
        , regras contratuais gerais
        {' '}
        <a href="http://localhost:3000">incluindo reembolso</a>
        , e muito mais, você encontra na nossa:
      </p>
      <Link className={ style.help } to="/">
        Central de ajuda
        {' '}
        <BsArrowRight className={ style.arrow } />
      </Link>
      <section className={ style.socials }>
        <FaFacebookF className={ style.social } />
        <FaTwitter className={ style.social } />
        <BsInstagram className={ style.social } />
        <BsYoutube className={ style.social } />
      </section>
    </aside>
  </footer>
);

export default Footer;
