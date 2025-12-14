import {AuthProvider} from './_utils/auth-context';

export default function layout({children}) {
    return <AuthProvider>{children}</AuthProvider>;
}