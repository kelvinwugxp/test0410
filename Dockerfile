# PostgreSQLの公式イメージをベースイメージとして使用
FROM postgres:latest

# 環境変数の設定（例）
ENV POSTGRES_DB=2024_gxp_test_db
ENV POSTGRES_USER=test_user
ENV POSTGRES_PASSWORD=test_password