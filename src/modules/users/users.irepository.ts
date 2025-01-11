export interface IUsersRepository {
    findOneByEmail(email: string): Promise<any>;
}