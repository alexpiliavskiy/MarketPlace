import React from 'react';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import Link from "next/link";
import {LINKS} from "@/consts/path.const";
import styles from "@/components/ProfileOrdersSection/ProfileOrderTable.module.scss";


const ProfileOrderTable = () => {
    const orders = [
        { id: "#2416", date: "October 1, 2024", status: "On hold", total: "$1,200.65 for 3 items" },
        { id: "#2417", date: "October 2, 2024", status: "On hold", total: "$1,200.65 for 3 items" },
        { id: "#2418", date: "October 3, 2024", status: "On hold", total: "$1,200.65 for 3 items" },
        { id: "#2419", date: "October 4, 2024", status: "On hold", total: "$1,200.65 for 3 items" },
    ];

    return (
        <TableContainer component={Paper} className={styles.orderTableContainer}>
            <Table>
                <TableHead>
                    <TableRow sx={{textAlign: "center"}} className={styles.orderTableHeader}>
                        <TableCell><Typography variant="h6" className={styles.orderTableHeadTitle}>ORDER</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6" className={styles.orderTableHeadTitle}>DATE</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6" className={styles.orderTableHeadTitle}>STATUS</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6" className={styles.orderTableHeadTitle}>TOTAL</Typography></TableCell>
                        <TableCell align="center"><Typography variant="h6" className={styles.orderTableHeadTitle}>ACTIONS</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow sx={{textAlign: "center"}} key={order.id} className={styles.orderTableBody}>
                            <TableCell>
                                <Typography className={styles.orderTableBodyID} color="primary" component="a" href={`/orders/${order.id}`}>
                                    {order.id}
                                </Typography>
                            </TableCell>
                            <TableCell align="center" className={styles.orderTableBodyText}>{order.date}</TableCell>
                            <TableCell align="center" className={styles.orderTableBodyText}>{order.status}</TableCell>
                            <TableCell align="center" className={styles.orderTableBodyText}>{order.total}</TableCell>
                            <TableCell align="center">
                                <Link href={LINKS.ORDERS}>
                                    <Button className={styles.orderTableBodyBtn}>VIEW</Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProfileOrderTable;