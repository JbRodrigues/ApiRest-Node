import exp from 'constants';
import { Router, Response, Request, NextFunction } from 'express';
import { StatusCodes } from "http-status-codes";

const userRoutes = Router();

userRoutes.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Julio' }];
    res.status(StatusCodes.OK).send(users)
});

userRoutes.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

userRoutes.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

userRoutes.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid })
});

userRoutes.delete('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK)

});
export default userRoutes;

