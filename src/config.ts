import { join } from 'path';

export const config = {
    /* API */
    API_NAME: 'PokeTradeAPI',
    API_VERSION: '1.0',
    API_DESCRIPTION: 'PokeTradeAPI is an API for data related to PokeTrade App',
    API_DOC_ENDPOINT: 'docs',
    API_ENDPOINT: 'api',

    /* APP */
    APP_STATIC_ASSETS_PATH: join(__dirname, '..', 'public'),
    APP_BASE_VIEW_DIR_PATH: join(__dirname, '..', 'views'),
    APP_VIEW_ENGINE: 'twig',
    APP_STATIC_ROOT_PATH: join(__dirname, '..', 'client/dist'),
    /* BCRYPT */
    APP_SALT_ROUNDS: 10,
    /* DATABASE */
    DB_MONGO_NAME: 'poketrade',
    DB_MONGO_HOST: '127.0.0.1',
    DB_MONGO_PORT: '27017,'
};

export const jwtConstants = {
    secret: 'secretKey',
    expiresIn: '60s',
};