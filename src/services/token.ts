import axios from "axios";
import { Subject, BehaviorSubject, firstValueFrom } from "rxjs";
import { exhaustMap, filter, map } from "rxjs/operators";
import { TOKENS } from "./token.model.js";
import constants from "../utils/constants";

const refrehToken$ = new Subject();
const accsesToken$ = new BehaviorSubject(
    localStorage.getItem(TOKENS.ACCESS_TOKEN)
);
const tokenSubscribe = () => refrehToken$
    .pipe(
        exhaustMap(() => {
            accsesToken$.next(TOKENS.PENDING_TOKEN);
            const refreshToken = localStorage.getItem("rwt");
            return axios
                .post(constants.BASE_URL + "/refresh-token", {
                    refreshToken,
                })
                .catch((err) => {
                    console.error("tokenService.refrehToken$", err);
                    return { data: { [TOKENS.ACCESS_TOKEN]: "" } };
                });
        }),
        map((res)=>res?.data)
    )
    .subscribe(({ [TOKENS.ACCESS_TOKEN]: jwt }) => {
        setAccessToken(jwt);
    });

async function getAccessToken(): Promise<string> {
    return firstValueFrom(accsesToken$
        .pipe(filter((token) => {
            return token !== TOKENS.PENDING_TOKEN}))) as Promise<string>;
}

function refreshToken(): void {
    refrehToken$.next(null);
}

function setAccessToken(token: string): void {
    localStorage.setItem(TOKENS.ACCESS_TOKEN, token);
    accsesToken$.next(token);
}

function setRefreshToken(token: string): void {
    localStorage.setItem(TOKENS.REFRESH_TOKEN, token);
}

function clearTokens(): void {
    localStorage.removeItem(TOKENS.ACCESS_TOKEN);
    localStorage.removeItem(TOKENS.REFRESH_TOKEN);
    accsesToken$.next("");
}

export default {
    getAccessToken,
    refreshToken,
    setAccessToken,
    setRefreshToken,
    clearTokens,
    tokenSubscribe
};