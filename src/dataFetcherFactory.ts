import { DataSource } from "@nq-framework/models";
import { MsSqlConfiguration } from "@nq-framework/models";
import { DataFetcher } from "./dataFetcherInterface";
import { SqlFetcher } from "./sql/sql-fetcher";

export class DataFetcherFactory {
    create(dataSource: DataSource): DataFetcher {
        if (dataSource.configuration.type === "mssql") {
            return new SqlFetcher(dataSource.configuration as MsSqlConfiguration);
        }
        throw new Error("Could not create Fetcher for request " + JSON.stringify(dataSource));
    }
}