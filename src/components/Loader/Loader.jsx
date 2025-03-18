import CircularProgress from "@mui/material/CircularProgress";

export default function Loader ({loading}) {
  return (
    <>
      {loading ? <CircularProgress/> : null}
    </>
  )
}