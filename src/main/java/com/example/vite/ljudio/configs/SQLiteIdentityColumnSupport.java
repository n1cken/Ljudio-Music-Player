package com.example.vite.ljudio.configs;

import org.hibernate.boot.MappingException;
import org.hibernate.dialect.identity.IdentityColumnSupportImpl;

//Class that enables us to use Autoincrement in our Springboot setup

public class SQLiteIdentityColumnSupport extends IdentityColumnSupportImpl {

    @Override
    public boolean supportsIdentityColumns() {
        return true;
    }

    @Override
    public String getIdentitySelectString(String table, String column, int type)
            throws MappingException {
        return "select last_insert_rowid()";
    }

    @Override
    public String getIdentityColumnString(int type) throws MappingException {
        return "integer";
    }
}
