import * as React from 'react'
import Box from '@mui/joy/Box'
import Table from '@mui/joy/Table'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import Checkbox from '@mui/joy/Checkbox'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import IconButton from '@mui/joy/IconButton'
import Link from '@mui/joy/Link'
import Tooltip from '@mui/joy/Tooltip'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import FilterListIcon from '@mui/icons-material/FilterList'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { visuallyHidden } from '@mui/utils'

function labelDisplayedRows({ from, to, count }: { from: number; to: number; count: number }) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy)
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) {
            return order
        }
        return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
}

interface HeadCell {
    disablePadding: boolean
    id: keyof Data
    label: string
    numeric: boolean
}

interface EnhancedTableProps {
    numSelected: number
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
    order: Order
    orderBy: string | number | null
    rowCount: number
    headCells: HeadCell[]
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property)
    }

    return (
        <thead>
            <tr>
                <th>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        slotProps={{
                            input: {
                                'aria-label': 'select all desserts'
                            }
                        }}
                        sx={{ verticalAlign: 'sub' }}
                    />
                </th>
                {props.headCells.map((headCell) => {
                    const active = orderBy === headCell.id
                    return (
                        <th key={headCell.id} aria-sort={active ? ({ asc: 'ascending', desc: 'descending' } as const)[order] : undefined}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link
                                underline="none"
                                color="neutral"
                                textColor={active ? 'primary.plainColor' : undefined}
                                component="button"
                                onClick={createSortHandler(headCell.id)}
                                fontWeight="lg"
                                startDecorator={headCell.numeric ? <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} /> : null}
                                endDecorator={!headCell.numeric ? <ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} /> : null}
                                sx={{
                                    '& svg': {
                                        transition: '0.2s',
                                        transform: active && order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)'
                                    },
                                    '&:hover': { '& svg': { opacity: 1 } }
                                }}
                            >
                                {headCell.label}
                                {active ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </Link>
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

interface EnhancedTableToolbarProps {
    numSelected: number
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props

    return (
        <Box
            sx={{
                display: 'block',
                alignItems: 'center',
                textAlign: 'right',
                py: 1,
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: 'background.level1'
                }),
                borderTopLeftRadius: 'var(--unstable_actionRadius)',
                borderTopRightRadius: 'var(--unstable_actionRadius)'
            }}
        >
            {numSelected === 1 ? (
                <Tooltip title="Edit" sx={{ marginRight: '10px' }}>
                    <IconButton size="sm" color="primary" variant="solid">
                        <EditIcon />
                    </IconButton>
                </Tooltip>
            ): (<></>)}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton size="sm" color="danger" variant="solid">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton size="sm" variant="outlined" color="neutral">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Box>
    )
}

interface Data {
    [key: string]: any
}

interface PropsTable {
    data: Data[]
    headCells: HeadCell[]
}

export default function TableSortAndSelection(props: PropsTable) {
    const [order, setOrder] = React.useState<Order>('asc')
    const [orderBy, setOrderBy] = React.useState<keyof Data>('')
    const [selected, setSelected] = React.useState<readonly (string | number)[]>([])
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = props.data.map((n) => n.name === null ? '' : n.name)
            setSelected(newSelected)
            return
        }
        setSelected([])
    }

    const handleClick = (event: React.MouseEvent<unknown>, name: string | number) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected: readonly (string | number)[] = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
        }

        setSelected(newSelected)
    }

    const handleChangePage = (newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
        setRowsPerPage(parseInt(newValue!.toString(), 10))
        setPage(0)
    }

    const getLabelDisplayedRowsTo = () => {
        if (props.data.length === -1) {
            return (page + 1) * rowsPerPage
        }
        return rowsPerPage === -1 ? props.data.length : Math.min(props.data.length, (page + 1) * rowsPerPage)
    }

    const isSelected = (name: string | number) => selected.indexOf(name) !== -1

    // Avoid a layout jump when reaching the last page with empty props.data.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.data.length) : 0

    return (
        <Sheet variant="outlined" sx={{ width: '100%', boxShadow: 'sm', borderRadius: 'sm' }}>
            <EnhancedTableToolbar numSelected={selected.length} />
            <Table
                aria-labelledby="tableTitle"
                hoverRow
                sx={{
                    '--TableCell-headBackground': 'transparent',
                    '--TableCell-selectedBackground': (theme) => theme.vars.palette.success.softBg,
                    '& thead th:nth-child(1)': {
                        width: '40px'
                    },
                    '& thead th:nth-child(2)': {
                        width: '30%'
                    },
                    '& tr > *:nth-child(n+3)': { textAlign: 'right' }
                }}
            >
                <EnhancedTableHead
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={props.data.length}
                    headCells={props.headCells}
                />
                <tbody>
                    {stableSort(props.data, getComparator(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row, index) => {
                            const isItemSelected = isSelected(row.name)
                            const labelId = `enhanced-table-checkbox-${index}`

                            return (
                                <tr
                                    onClick={(event) => handleClick(event, row.name)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.name}
                                    // selected={isItemSelected}
                                    style={
                                        isItemSelected
                                            ? ({
                                                  '--TableCell-dataBackground': 'var(--TableCell-selectedBackground)',
                                                  '--TableCell-headBackground': 'var(--TableCell-selectedBackground)'
                                              } as React.CSSProperties)
                                            : {}
                                    }
                                >
                                    <th scope="row">
                                        <Checkbox
                                            checked={isItemSelected}
                                            slotProps={{
                                                input: {
                                                    'aria-labelledby': labelId
                                                }
                                            }}
                                            sx={{ verticalAlign: 'top' }}
                                        />
                                    </th>
                                    <th id={labelId} scope="row">
                                        {row.name}
                                    </th>
                                    <td>{row.calories}</td>
                                    <td>{row.fat}</td>
                                    <td>{row.carbs}</td>
                                    <td>{row.protein}</td>
                                </tr>
                            )
                        })}
                    {emptyRows > 0 && (
                        <tr
                            style={
                                {
                                    height: `calc(${emptyRows} * 40px)`,
                                    '--TableRow-hoverBackground': 'transparent'
                                } as React.CSSProperties
                            }
                        >
                            <td colSpan={6} aria-hidden />
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={6}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <FormControl orientation="horizontal" size="sm">
                                    <FormLabel>Rows per page:</FormLabel>
                                    <Select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                                        <Option value={5}>5</Option>
                                        <Option value={10}>10</Option>
                                        <Option value={25}>25</Option>
                                    </Select>
                                </FormControl>
                                <Typography textAlign="center" sx={{ minWidth: 80 }}>
                                    {labelDisplayedRows({
                                        from: props.data.length === 0 ? 0 : page * rowsPerPage + 1,
                                        to: getLabelDisplayedRowsTo(),
                                        count: props.data.length === -1 ? -1 : props.data.length
                                    })}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <IconButton
                                        size="sm"
                                        color="neutral"
                                        variant="outlined"
                                        disabled={page === 0}
                                        onClick={() => handleChangePage(page - 1)}
                                        sx={{ bgcolor: 'background.surface' }}
                                    >
                                        <KeyboardArrowLeftIcon />
                                    </IconButton>
                                    <IconButton
                                        size="sm"
                                        color="neutral"
                                        variant="outlined"
                                        disabled={props.data.length !== -1 ? page >= Math.ceil(props.data.length / rowsPerPage) - 1 : false}
                                        onClick={() => handleChangePage(page + 1)}
                                        sx={{ bgcolor: 'background.surface' }}
                                    >
                                        <KeyboardArrowRightIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </Sheet>
    )
}
