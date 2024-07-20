export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    SUCCESSFUL: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INVALID_VALUE: 422,
    DELETE: 204,
  };
  return statusHTTPMap[status] ?? 500;
}