import { ReactElement } from "react";
import Layout from "../../Components/layout/Layout";
import Three from "../../Components/Three";

export default function home(): ReactElement {
    return (
        <Layout>
            <h1 className="body">Home</h1>
            <Three />
        </Layout>
    );
}