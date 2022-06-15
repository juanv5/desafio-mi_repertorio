CREATE DATABASE repertorio;

\c repertorio

CREATE TABLE repertorio (
    id SERIAL,
    cancion VARCHAR (50),
    artista VARCHAR (50),
    tono VARCHAR (10)
);

INSERT * INTO repertorio;