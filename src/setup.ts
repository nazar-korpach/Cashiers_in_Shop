import pg from 'pg';
delete pg.native;

process.env['NODE_PG_FORCE_NATIVE'] = 'true';
