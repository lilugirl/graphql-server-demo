import * as database from './database'
import * as tables from './tables'

export const getNodeById=(nodeId)=>{
    const {tableName,dbId}=tables.spliteNodeId(nodeId);
    const table=tables[tableName];
    const query=table
        .select(table.star())
        .where(table.id.equals(dbId))
        .limit(1)
        .toQuery();

    return database.getSql(query).then((rows)=>{
        if(rows[0]){
            rows[0].__tableName=tableName
        }
        return rows[0]
    });

}