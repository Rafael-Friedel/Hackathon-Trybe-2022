import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">
          Loja
          <section>
            <Link to="/">Vinhos</Link>
            <Link to="/">Outras bebidas</Link>
          </section>
        </Link>
        <Link to="/products">
          CLUBE WINE
          <section>
            <Link to="/">Vinhos</Link>
            <Link to="/">Outras bebidas</Link>
            <Link to="/">Como funciona</Link>
            <Link to="/">Indique Amigos</Link>
            <Link to="/">WineBox Essenciais</Link>
            <Link to="/">WineBox Surpreendentes</Link>
            <Link to="/">WineBox Notáveis</Link>
            <Link to="/">WineBox Singulares</Link>
            <Link to="/">WineBox Espumantes</Link>
            <Link to="/">WineBox Refrescantes</Link>
          </section>
        </Link>
        <Link to="/">
          MINHA CONTA
          <section>
            <Link to="/">Dados pessoais</Link>
            <Link to="/">Pedidos</Link>
            <Link to="/">Cartões</Link>
            <Link to="/">Endereços</Link>
            <Link to="/">Clube Wine</Link>
            <Link to="/">Favoritos</Link>
            <Link to="/">Cupons</Link>
            <Link to="/">Presentes</Link>
            <Link to="/">Indique amigos</Link>
          </section>
        </Link>
        <Link to="/products">
          CONHEÇA TAMBÉM
          <section>
            <Link to="/">Institucional</Link>
            <Link to="/">Lojas Oficiais</Link>
            <Link to="/">Lojas Físicas</Link>
            <Link to="/">Bodegas</Link>
            <Link to="/">App Wine</Link>
            <Link to="/">WineUP</Link>
            <Link to="/">Wine Eventos</Link>
            <Link to="/">Podcast</Link>
            <Link to="/">Winepedia</Link>
            <Link to="/">Team Wine</Link>
            <Link to="/">Trabalhe na Wine</Link>
            <Link to="/">Portal de Privacidade</Link>
            <Link to="/">Preferência de Cookies</Link>
          </section>
        </Link>
      </nav>
      <aside>
        <h2>Alguma dúvida? A gente ajuda você!</h2>
        <p>Horário de atendimento:</p>
        <p>De segunda a sexta-feira de 09h as 18h. Exceto feriados.</p>
        <p>
          <a>Políticas de trocas e devolução</a>, regras contratuais gerais{" "}
          <a>incluindo reembolso</a>, e muito mais, você encontra na nossa:
        </p>
        <Link to="/">
          Central de ajuda <BsArrowRight />
        </Link>
        <section>
          <FaFacebookF />
          <FaTwitter />
          <BsInstagram />
          <BsYoutube />
        </section>
      </aside>
    </footer>
  );
};

export default Footer;
