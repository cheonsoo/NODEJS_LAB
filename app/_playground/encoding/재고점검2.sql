 
-- 1. 재고 sum
   SELECT 
      ---  S = A+B+C+D+E+F+G+H
      P.WH_NO,
      P.PRD_ID,
      P.UNT_PRD_ID,
      SUM(P.G_QTY) AS G_QTY,         -- 전산재고 S
      SUM(P.B_QTY) AS B_QTY, 
      0 AS G_QTY_BSC,                -- 기초재고 ( 특정 기준일의  기말 재고 기준이 없는 것 같습  )  A 
      0 AS B_QTY_BSC,
      SUM(P.G_QTY_SI) AS G_QTY_SI,   -- 입고확정   B
      SUM(P.B_QTY_SI) AS B_QTY_SI,
      SUM(P.G_QTY_SO) AS G_QTY_SO,   -- 반출확정   C
      SUM(P.B_QTY_SO) AS B_QTY_SO,
      SUM(P.G_QTY_GA) AS G_QTY_GA,   -- 등급조정   D
      SUM(P.B_QTY_GA) AS B_QTY_GA,
      SUM(P.G_QTY_SA) AS G_QTY_SA,   -- 재고조정   E
      SUM(P.B_QTY_SA) AS B_QTY_SA,
      SUM(P.G_QTY_SMO) AS G_QTY_SMO, -- 창고이동반출  F
      SUM(P.B_QTY_SMO) AS B_QTY_SMO,
      SUM(P.G_QTY_SMI) AS G_QTY_SMI, -- 창고이동입고  G
      SUM(P.B_QTY_SMI) AS B_QTY_SMI,
      SUM(P.G_QTY_FO) AS G_QTY_FO,   -- 주문출고확정  (운송장) H
      SUM(P.B_QTY_FR) AS B_QTY_FR,   -- 반품회수확정  (운송장)
      SUM(P.ORD_QTY)  AS ORD_QTY     -- 주문수량 (출고확정전 수량-참고로 확인, 주문취소수량 포함하지 않음, 회수쪽 고려 안함 )
    FROM (
      --[Stock]
      SELECT A.WH_NO,
             A.PRD_ID,
             A.UNT_PRD_ID,
             SUM(A.G_QTY) AS G_QTY, -- 전산재고
             SUM(A.B_QTY) AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             0 AS G_QTY_SI,  -- 입고확정
             0 AS B_QTY_SI,
             0 AS G_QTY_SO,  -- 반출확정
             0 AS B_QTY_SO,
             0 AS G_QTY_GA,  -- 등급조정
             0 AS B_QTY_GA,
             0 AS G_QTY_SA,  -- 재고조정
             0 AS B_QTY_SA,
             0 AS G_QTY_SMO, -- 창고이동반출
             0 AS B_QTY_SMO,
             0 AS G_QTY_SMI, -- 창고이동입고
             0 AS B_QTY_SMI,
             0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY   
        FROM FUL_STOCK_M A
       WHERE 1 = 1
         --AND A.PRD_ID LIKE '010704'
         --AND A.UNT_PRD_ID LIKE '010704001'
         AND A.WH_NO <> 'P00'
       GROUP BY A.WH_NO, A.PRD_ID, A.UNT_PRD_ID
       UNION ALL 
       -- Stock In
       SELECT M.WH_NO,
             D.PRD_ID,
             D.UNT_PRD_ID,
             0 AS G_QTY, -- 전산재고
             0 AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             SUM(D.STKI_CNFM_G_QTY) AS G_QTY_SI,  -- 입고확정
             SUM(D.STKI_CNFM_B_QTY) AS B_QTY_SI,
             0 AS G_QTY_SO,  -- 반출확정
             0 AS B_QTY_SO,
             0 AS G_QTY_GA,  -- 등급조정
             0 AS B_QTY_GA,
             0 AS G_QTY_SA,  -- 재고조정
             0 AS B_QTY_SA,
             0 AS G_QTY_SMO, -- 창고이동반출
             0 AS B_QTY_SMO,
             0 AS G_QTY_SMI, -- 창고이동입고
             0 AS B_QTY_SMI,
             0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY
        FROM FUL_STKI_CNFM_M M, FUL_STKI_CNFM_D D
       WHERE 1 = 1
         AND M.WH_NO = D.WH_NO
         AND M.STKI_ID = D.STKI_ID
         --AND M.STKI_CNFM_DATE >= ld_from_date
         --AND M.STKI_CNFM_DATE <  ld_to_date + 1
         --AND D.PRD_ID LIKE '010704'
         --AND D.UNT_PRD_ID LIKE '010704001'
       GROUP BY M.WH_NO, D.PRD_ID, D.UNT_PRD_ID
       UNION ALL 
       -- Stock Export
       SELECT M.WH_NO,
             D.PRD_ID,
             D.UNT_PRD_ID,
             0 AS G_QTY, -- 전산재고
             0 AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             0 AS G_QTY_SI,  -- 입고확정
             0 AS B_QTY_SI,
             SUM(D.RTN_DLR_CNFM_G_QTY) * -1 AS G_QTY_SO,  -- 반출확정
             SUM(D.RTN_DLR_CNFM_B_QTY) * -1 AS B_QTY_SO,
             0 AS G_QTY_GA,  -- 등급조정
             0 AS B_QTY_GA,
             0 AS G_QTY_SA,  -- 재고조정
             0 AS B_QTY_SA,
             0 AS G_QTY_SMO, -- 창고이동반출
             0 AS B_QTY_SMO,
             0 AS G_QTY_SMI, -- 창고이동입고
             0 AS B_QTY_SMI,
             0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY
        FROM FUL_RTD_CNFM_M M, FUL_RTD_CNFM_D D
       WHERE 1 = 1
         AND M.WH_NO = D.WH_NO
         AND M.RTN_DLR_ID = D.RTN_DLR_ID
         --AND M.RTN_DLR_CNFM_DATE >= ld_from_date
         --AND M.RTN_DLR_CNFM_DATE <  ld_to_date + 1
         --AND D.PRD_ID LIKE '010704'
         --AND D.UNT_PRD_ID LIKE '010704001'
       GROUP BY M.WH_NO, D.PRD_ID, D.UNT_PRD_ID
       UNION ALL
       -- Grade Adjustment
       SELECT D.WH_NO,
             D.PRD_ID                 AS PRD_ID,
             D.UNT_PRD_ID             AS UNT_PRD_ID,
             0 AS G_QTY, -- 전산재고
             0 AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             0 AS G_QTY_SI,  -- 입고확정
             0 AS B_QTY_SI,
             0 AS G_QTY_SO,  -- 반출확정
             0 AS B_QTY_SO,
             SUM((CASE WHEN D.GD_ADJ_STS_CD = '10' THEN -1 ELSE 1 END) * NVL(D.GD_ADJ_QTY, 0)) AS G_QTY_GA,  -- 등급조정
             SUM((CASE WHEN D.GD_ADJ_STS_CD = '10' THEN 1 ELSE -1 END) * NVL(D.GD_ADJ_QTY, 0)) AS B_QTY_GA,
             0 AS G_QTY_SA,  -- 재고조정
             0 AS B_QTY_SA,
             0 AS G_QTY_SMO, -- 창고이동반출
             0 AS B_QTY_SMO,
             0 AS G_QTY_SMI, -- 창고이동입고
             0 AS B_QTY_SMI,
             0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY
        FROM FUL_GD_ADJ_D D
        WHERE 1 = 1
         --AND D.INST_DTM       >= ld_from_date
         --AND D.INST_DTM       <  ld_to_date + 1
         --AND D.PRD_ID LIKE '010704'
         --AND D.UNT_PRD_ID LIKE '010704001'
        GROUP BY  D.WH_NO, D.PRD_ID, D.UNT_PRD_ID
        UNION ALL
        -- Stock Adjust
        SELECT D.WH_NO,
             D.PRD_ID,
             D.UNT_PRD_ID,
             0 AS G_QTY, -- 전산재고
             0 AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             0 AS G_QTY_SI,  -- 입고확정
             0 AS B_QTY_SI,
             0 AS G_QTY_SO,  -- 반출확정
             0 AS B_QTY_SO,
             0 AS G_QTY_GA,  -- 등급조정
             0 AS B_QTY_GA,
             SUM(CASE WHEN D.STOCK_GD_CD = 'G' THEN
                 D.STOCK_ADJ_QTY * DECODE(D.STOCK_ADJ_SP_CD, '10', -1, '30', 0, '20', 1, 0) END) AS G_QTY_SA, -- 재고조정
             SUM(CASE WHEN D.STOCK_GD_CD = 'B' THEN
                 D.STOCK_ADJ_QTY * DECODE(D.STOCK_ADJ_SP_CD, '10', -1, '30', 0, '20', 1, 0) END) AS B_QTY_SA,
             0 AS G_QTY_SMO, -- 창고이동반출
             0 AS B_QTY_SMO,
             0 AS G_QTY_SMI, -- 창고이동입고
             0 AS B_QTY_SMI,
             0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY
        FROM FUL_STOCK_ADJ_D D
        WHERE 1 = 1
         --AND D.INST_DTM       >= ld_from_date
         --AND D.INST_DTM       <  ld_to_date + 1
         --AND D.PRD_ID         LIKE '010704'
         --AND D.UNT_PRD_ID     LIKE '010704001'
        GROUP BY  D.WH_NO, D.PRD_ID, D.UNT_PRD_ID 
        UNION ALL
        -- Stock Move Out 
        SELECT M.STKO_WH_NO             AS WH_NO,
             D.PRD_ID,
             D.UNT_PRD_ID,
             0 AS G_QTY, -- 전산재고
             0 AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             0 AS G_QTY_SI,  -- 입고확정
             0 AS B_QTY_SI,
             0 AS G_QTY_SO,  -- 반출확정
             0 AS B_QTY_SO,
             0 AS G_QTY_GA,  -- 등급조정
             0 AS B_QTY_GA,
             0 AS G_QTY_SA,  -- 재고조정
             0 AS B_QTY_SA,
             SUM(D.WH_MV_STKO_G_QTY) * -1 AS G_QTY_SMO, -- 창고이동반출
             SUM(D.WH_MV_STKO_B_QTY) * -1 AS B_QTY_SMO,
             0 AS G_QTY_SMI, -- 창고이동입고
             0 AS B_QTY_SMI,
             0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY
          FROM FUL_MV_CMD_M M
             , FUL_MV_CMD_D D
         WHERE 1 = 1
           AND M.WH_MV_CMD_ID  =  D.WH_MV_CMD_ID
           AND M.WH_MV_PGS_STS_CD    IN ('20', '30')
           --AND M.WH_MV_CNFM_DATE >= ld_from_date
           --AND M.WH_MV_CNFM_DATE <  ld_to_date + 1
           --AND D.PRD_ID         LIKE '010704'
           --AND D.UNT_PRD_ID     LIKE '010704001'
         GROUP BY M.STKO_WH_NO, D.PRD_ID, D.UNT_PRD_ID
         UNION ALL
         -- Stock Move In
         SELECT M.STKI_WH_NO             AS WH_NO,
             D.PRD_ID,
             D.UNT_PRD_ID,
             0 AS G_QTY, -- 전산재고
             0 AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             0 AS G_QTY_SI,  -- 입고확정
             0 AS B_QTY_SI,
             0 AS G_QTY_SO,  -- 반출확정
             0 AS B_QTY_SO,
             0 AS G_QTY_GA,  -- 등급조정
             0 AS B_QTY_GA,
             0 AS G_QTY_SA,  -- 재고조정
             0 AS B_QTY_SA,
             0 AS G_QTY_SMO, -- 창고이동반출
             0 AS B_QTY_SMO,
             SUM(D.WH_MV_STKI_G_QTY)  AS G_QTY_SMI, -- 창고이동입고
             SUM(D.WH_MV_STKI_B_QTY)  AS B_QTY_SMI,
             0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY
          FROM FUL_MV_CMD_M M
             , FUL_MV_CMD_D D
         WHERE 1 = 1
           AND M.WH_MV_CMD_ID  =  D.WH_MV_CMD_ID
           AND M.WH_MV_PGS_STS_CD    = '30'
           --AND M.WH_MV_CNFM_DATE >= ld_from_date
           --AND M.WH_MV_CNFM_DATE <  ld_to_date + 1
           --AND D.PRD_ID         LIKE '010704'
           --AND D.UNT_PRD_ID     LIKE '010704001'
         GROUP BY M.STKI_WH_NO, D.PRD_ID, D.UNT_PRD_ID
         UNION ALL
         -- FUL INVC ORDER
         SELECT 
             D.STKO_WH_NO AS WH_NO,
             D.PRD_ID,
             D.UNT_PRD_ID,
             0 AS G_QTY, -- 전산재고
             0 AS B_QTY, 
             0 AS G_QTY_BSC, -- 기초재고
             0 AS B_QTY_BSC,
             0 AS G_QTY_SI,  -- 입고확정
             0 AS B_QTY_SI,
             0 AS G_QTY_SO,  -- 반출확정
             0 AS B_QTY_SO,
             0 AS G_QTY_GA,  -- 등급조정
             0 AS B_QTY_GA,
             0 AS G_QTY_SA,  -- 재고조정
             0 AS B_QTY_SA,
             0 AS G_QTY_SMO, -- 창고이동반출
             0 AS B_QTY_SMO,
             0 AS G_QTY_SMI, -- 창고이동입고
             0 AS B_QTY_SMI,
             SUM(D.STKO_QTY) * -1 AS G_QTY_FO,  -- 주문출고확정 (운송장)
             0 AS B_QTY_FR,   -- 반품회수확정 (운송장)
             0 AS ORD_QTY
         FROM FUL_INVC_M M, FUL_INVC_D D
          WHERE 1=1
          AND M.INVC_ID = D.INVC_ID
          AND M.INVC_PTR_CD IN ('100', '110')
          AND EXISTS (SELECT 1 FROM FUL_INVC_STS_CHG_H H WHERE H.INVC_ID = D.INVC_ID  AND H.INVC_PGS_STS_CD = '60' AND H.INVC_PGS_DTL_STS_CD = '6010')
          --AND M.STKO_CNFM_DTM >= ld_from_date
          --AND M.STKO_CNFM_DTM <  ld_to_date + 1
          --AND D.PRD_ID LIKE '010704'
          --AND D.UNT_PRD_ID LIKE '010704001'
          GROUP BY D.STKO_WH_NO, D.PRD_ID, D.UNT_PRD_ID
          UNION ALL
          -- FUL INVC Refund
          SELECT 
              D.STKO_WH_NO AS WH_NO,
              D.PRD_ID,
              D.UNT_PRD_ID,
              0 AS G_QTY, -- 전산재고
              0 AS B_QTY, 
              0 AS G_QTY_BSC, -- 기초재고
              0 AS B_QTY_BSC,
              0 AS G_QTY_SI,  -- 입고확정
              0 AS B_QTY_SI,
              0 AS G_QTY_SO,  -- 반출확정
              0 AS B_QTY_SO,
              0 AS G_QTY_GA,  -- 등급조정
              0 AS B_QTY_GA,
              0 AS G_QTY_SA,  -- 재고조정
              0 AS B_QTY_SA,
              0 AS G_QTY_SMO, -- 창고이동반출
              0 AS B_QTY_SMO,
              0 AS G_QTY_SMI, -- 창고이동입고
              0 AS B_QTY_SMI,
              0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
              SUM(D.STKO_QTY) AS B_QTY_FR, -- 반품회수확정 (운송장)
              0 AS ORD_QTY
          FROM FUL_INVC_M M, FUL_INVC_D D
          WHERE 1=1
          AND M.INVC_ID = D.INVC_ID
          AND M.INVC_PTR_CD IN ('200', '210')
          AND EXISTS (SELECT 1 FROM FUL_INVC_STS_CHG_H H WHERE H.INVC_ID = D.INVC_ID  AND H.INVC_PGS_STS_CD = '96' AND H.INVC_PGS_DTL_STS_CD = '9610')
          --AND M.DLV_CMP_DTM >= ld_from_date
          --AND M.DLV_CMP_DTM <  ld_to_date + 1
          --AND D.PRD_ID LIKE '010704'
          --AND D.UNT_PRD_ID LIKE '010704001'
          GROUP BY D.STKO_WH_NO, D.PRD_ID, D.UNT_PRD_ID
          UNION ALL
          -- ORDER 
          SELECT 
              D.STKO_WH_NO AS WH_NO,
              D.PRD_ID,
              D.UNT_PRD_ID,
              0 AS G_QTY, -- 전산재고
              0 AS B_QTY, 
              0 AS G_QTY_BSC, -- 기초재고
              0 AS B_QTY_BSC,
              0 AS G_QTY_SI,  -- 입고확정
              0 AS B_QTY_SI,
              0 AS G_QTY_SO,  -- 반출확정
              0 AS B_QTY_SO,
              0 AS G_QTY_GA,  -- 등급조정
              0 AS B_QTY_GA,
              0 AS G_QTY_SA,  -- 재고조정
              0 AS B_QTY_SA,
              0 AS G_QTY_SMO, -- 창고이동반출
              0 AS B_QTY_SMO,
              0 AS G_QTY_SMI, -- 창고이동입고
              0 AS B_QTY_SMI,
              0 AS G_QTY_FO,  -- 주문출고확정 (운송장)
              0 AS B_QTY_FR, -- 반품회수확정 (운송장)
              SUM(D.ORD_QTY) AS ORD_QTY
          FROM ORD_ORD_DTL_D D
          WHERE 1=1
              AND D.ORD_PTR_CD IN ('100', '110')
              AND EXISTS (SELECT 1 FROM ORD_ORD_BSC_M M WHERE M.ORD_ID = D.ORD_ID )
              AND D.ORD_STS_CD IN ('30', '40', '50')
              --AND D.ORD_ACP_DTM >= ld_from_date
              --AND D.ORD_ACP_DTM <  ld_to_date + 1
              --AND D.STKO_WH_NO = 'W01'
              --AND D.PRD_ID LIKE '010704'
              --AND D.UNT_PRD_ID LIKE '010704001'
          GROUP BY D.STKO_WH_NO, D.PRD_ID, D.UNT_PRD_ID
    ) P
    GROUP BY P.WH_NO, P.PRD_ID, P.UNT_PRD_ID
    ORDER BY P.PRD_ID ASC, P.UNT_PRD_ID ASC
-- 2. 재고 추적
SELECT 'Stock In'              AS AREA
     , M.WH_NO
     , D.PRD_ID
     , D.UNT_PRD_ID
     , D.STKI_CNFM_G_QTY       AS G_QTY
     , D.STKI_CNFM_B_QTY       AS B_QTY
     , M.STKI_CNFM_DATE        AS PROC_DATE
  FROM FUL_STKI_CNFM_M M
     , FUL_STKI_CNFM_D D
 WHERE 1 = 1
   AND M.WH_NO          =  D.WH_NO
   AND M.STKI_ID        =  D.STKI_ID
   --AND M.STKI_CNFM_DATE >= TO_DATE('20200101', 'YYYYMMDD')
   --AND M.STKI_CNFM_DATE <  TRUNC(SYSDATE)
   --AND M.WH_NO          LIKE 'C01'
   AND D.PRD_ID         LIKE '010704'
   --AND D.UNT_PRD_ID     LIKE '010704001'
 UNION ALL
SELECT 
       'Order-OUT CFM'                 AS AREA
     , D.STKO_WH_NO            AS WH_NO
     , D.PRD_ID
     , D.UNT_PRD_ID
     , D.STKO_QTY * -1         AS G_QTY
     , 0                       AS B_QTY
     , M.STKO_CNFM_DTM         AS PROC_DATE
  FROM FUL_INVC_M M, FUL_INVC_D D
 WHERE 1=1
   AND M.INVC_ID = D.INVC_ID
   AND M.INVC_PTR_CD IN ('100', '110')
   AND EXISTS (SELECT 1 FROM FUL_INVC_STS_CHG_H H WHERE H.INVC_ID = D.INVC_ID  AND H.INVC_PGS_STS_CD = '60' AND H.INVC_PGS_DTL_STS_CD = '6010')
   --AND M.STKO_CNFM_DTM >= ld_from_date
   --AND M.STKO_CNFM_DTM <  ld_to_date + 1
   --AND M.STKO_WH_NO          LIKE 'C01'
   AND D.PRD_ID LIKE '010704'
 UNION ALL
SELECT 
       'Refund-IN CFM'                AS AREA
     , D.STKO_WH_NO            AS WH_NO
     , D.PRD_ID
     , D.UNT_PRD_ID
     , 0                       AS G_QTY
     , D.STKO_QTY              AS B_QTY
     , M.DLV_CMP_DTM           AS PROC_DATE
  FROM FUL_INVC_M M, FUL_INVC_D D
 WHERE 1=1
   AND M.INVC_ID = D.INVC_ID
   AND M.INVC_PTR_CD IN ('200', '210')
   AND EXISTS (SELECT 1 FROM FUL_INVC_STS_CHG_H H WHERE H.INVC_ID = D.INVC_ID  AND H.INVC_PGS_STS_CD = '96' AND H.INVC_PGS_DTL_STS_CD = '9610')
   --AND M.DLV_CMP_DTM >= ld_from_date
   --AND M.DLV_CMP_DTM <  ld_to_date + 1
   --AND M.STKO_WH_NO          LIKE 'C01'
   AND D.PRD_ID LIKE '010704'
 UNION ALL
SELECT 'Export'                AS AREA
     , M.WH_NO
     , D.PRD_ID
     , D.UNT_PRD_ID
     , D.RTN_DLR_CNFM_G_QTY * -1 AS G_QTY
     , D.RTN_DLR_CNFM_B_QTY * -1 AS B_QTY
     , M.RTN_DLR_CNFM_DATE     AS PROC_DATE
  FROM FUL_RTD_CNFM_M M
     , FUL_RTD_CNFM_D D
 WHERE 1 = 1
   AND M.WH_NO          =  D.WH_NO
   AND M.RTN_DLR_ID     =  D.RTN_DLR_ID
  -- AND M.RTN_DLR_CNFM_DATE >= TO_DATE('20200101', 'YYYYMMDD')
  -- AND M.RTN_DLR_CNFM_DATE <  TRUNC(SYSDATE)
  -- AND M.WH_NO          LIKE 'C01'
   AND D.PRD_ID         LIKE '010704'
  -- AND D.UNT_PRD_ID     LIKE '010704001'
 UNION ALL
SELECT 'Grade Adj'      AS AREA
     , D.WH_NO
     , D.PRD_ID                AS PRD_ID
     , D.UNT_PRD_ID            AS UNT_PRD_ID
     , (CASE WHEN D.GD_ADJ_STS_CD = '10' THEN -1 ELSE  1 END) * NVL(D.GD_ADJ_QTY, 0) AS G_QTY
     , (CASE WHEN D.GD_ADJ_STS_CD = '10' THEN  1 ELSE -1 END) * NVL(D.GD_ADJ_QTY, 0) AS B_QTY
     , D.INST_DTM              AS PROC_DATE
  FROM FUL_GD_ADJ_D D
 WHERE 1 = 1
   --AND D.INST_DTM       >= TO_DATE('20200101', 'YYYYMMDD')
   --AND D.INST_DTM       <  TRUNC(SYSDATE)
   --AND D.WH_NO          LIKE 'C01'
   AND D.PRD_ID         LIKE '010704'
   --AND D.UNT_PRD_ID     LIKE '34330'
 UNION ALL
SELECT 'Stock Adj'             AS AREA
     , D.WH_NO
     , D.PRD_ID
     , D.UNT_PRD_ID
     , CASE WHEN D.STOCK_GD_CD = 'G' THEN D.STOCK_ADJ_QTY * DECODE(D.STOCK_ADJ_SP_CD, '10', -1, '30', 0, '20', 1, 0) END AS G_QTY
     , CASE WHEN D.STOCK_GD_CD = 'B' THEN D.STOCK_ADJ_QTY * DECODE(D.STOCK_ADJ_SP_CD, '10', -1, '30', 0, '20', 1, 0) END AS B_QTY
     , D.INST_DTM              AS PROC_DATE
  FROM FUL_STOCK_ADJ_D D
 WHERE 1 = 1
   AND D.STOCK_ADJ_SP_CD IN ('10', '20')
   --AND D.INST_DTM       >= TO_DATE('20200101', 'YYYYMMDD')
   --AND D.INST_DTM       <  TRUNC(SYSDATE)
   AND D.WH_NO          LIKE 'C01'
   AND D.PRD_ID         LIKE '010704'
   --AND D.UNT_PRD_ID     LIKE '34330'
 UNION ALL
SELECT 'Stock M Out'           AS AREA
     , M.STKO_WH_NO            AS WH_NO
     , D.PRD_ID
     , D.UNT_PRD_ID
     , D.WH_MV_STKO_G_QTY * -1 AS G_QTY
     , D.WH_MV_STKO_B_QTY * -1 AS B_QTY
     , M.WH_MV_STKO_CNFM_DATE  AS PROC_DATE
  FROM FUL_MV_CMD_M M
     , FUL_MV_CMD_D D
 WHERE 1 = 1
   AND M.WH_MV_CMD_ID  =  D.WH_MV_CMD_ID
   AND M.WH_MV_PGS_STS_CD    IN ('20', '30')
   --AND M.WH_MV_CNFM_DATE >= TO_DATE('20200101', 'YYYYMMDD')
   --AND M.WH_MV_CNFM_DATE <  TRUNC(SYSDATE)
   --AND M.STKO_WH_NO     LIKE 'C01'
   AND D.PRD_ID         LIKE '010704'
   --AND D.UNT_PRD_ID     LIKE '34330'
 UNION ALL
SELECT 'Stock M In'            AS AREA
     , M.STKI_WH_NO            AS WH_NO
     , D.PRD_ID
     , D.UNT_PRD_ID
     , D.WH_MV_STKI_G_QTY      AS G_QTY
     , D.WH_MV_STKI_B_QTY      AS B_QTY
     , M.WH_MV_STKI_CNFM_DATE       AS PROC_DATE
  FROM FUL_MV_CMD_M M
     , FUL_MV_CMD_D D
 WHERE 1 = 1
   AND M.WH_MV_CMD_ID  =  D.WH_MV_CMD_ID
   AND M.WH_MV_PGS_STS_CD    IN ('30')
   --AND M.WH_MV_CNFM_DATE >= TO_DATE('20150401', 'YYYYMMDD')
   --AND M.WH_MV_CNFM_DATE <  TRUNC(SYSDATE)
   --AND M.STKI_WH_NO     LIKE 'C01'
   AND D.PRD_ID         LIKE '010704'
;


-- 3. FUL_STOCK_M VS FUL_STOCK_CNFM_H VS FUL_D_STOCK_H

SELECT A.WH_NO
     , A.PRD_ID
     , A.UNT_PRD_ID
     , NVL(SUM(A.M_G_QTY), 0) - (NVL(SUM(A.I_G_QTY), 0) + NVL(SUM(A.H_G_QTY), 0)) AS D_G_QTY
     , NVL(SUM(A.M_B_QTY), 0) - (NVL(SUM(A.I_B_QTY), 0) + NVL(SUM(A.H_B_QTY), 0)) AS D_B_QTY
     , SUM(A.M_G_QTY) AS M_G_QTY
     , SUM(A.M_B_QTY) AS M_B_QTY
     , SUM(A.I_G_QTY) AS I_G_QTY
     , SUM(A.I_B_QTY) AS I_B_QTY
     , SUM(A.H_G_QTY) AS H_G_QTY
     , SUM(A.H_B_QTY) AS H_B_QTY
  FROM (   
-- FUL_STOCK_M
SELECT A.WH_NO
     , A.PRD_ID
     , A.UNT_PRD_ID
     , A.G_QTY AS M_G_QTY
     , A.B_QTY AS M_B_QTY
     , 0 AS I_G_QTY
     , 0 AS I_B_QTY
     , 0 AS H_G_QTY
     , 0 AS H_B_QTY
  FROM FUL_STOCK_M A
 WHERE 1 = 1
   AND WH_NO <> 'P00' 
 UNION ALL 
-- FUL_STOCK_CNFM_H
SELECT A.WH_NO
     , B.PRD_ID
     , A.UNT_PRD_ID 
     , 0 AS M_G_QTY
     , 0 AS M_B_QTY
     , 0 AS I_G_QTY
     , 0 AS I_B_QTY
     , SUM(A.G_QTY * DECODE(A.STOCK_CHG_RSN_CD, '20', -1, '40', -1, '50', -1, 1) ) AS H_G_QTY
     , SUM(A.B_QTY * DECODE(A.STOCK_CHG_RSN_CD, '20', -1, '40', -1, '50', -1, 1) ) AS H_B_QTY
  FROM FUL_STOCK_CNFM_H A
     , PRD_UNT_PRD_D B
 WHERE 1 = 1
   AND A.UNT_PRD_ID = B.UNT_PRD_ID
   AND A.INST_DTM >= TO_DATE('20201201', 'YYYYMMDD')
   AND A.WH_NO <> 'P00' 
 GROUP BY
       A.WH_NO
     , B.PRD_ID
     , A.UNT_PRD_ID
 UNION ALL
-- FUL_D_STOCK_H
SELECT A.WH_NO
     , A.PRD_ID
     , A.UNT_PRD_ID
     , 0 AS M_G_QTY
     , 0 AS M_B_QTY
     , 0 AS H_G_QTY
     , 0 AS H_B_QTY
     , SUM(A.G_QTY) AS I_G_QTY
     , SUM(A.B_QTY) AS I_B_QTY
  FROM FUL_D_STOCK_H A
 WHERE 1 = 1
   AND A.STOCK_DATE = TO_DATE('20201201', 'YYYYMMDD')
   AND A.WH_NO <> 'P00' 
 GROUP BY
       A.WH_NO
     , A.PRD_ID
     , A.UNT_PRD_ID
       ) A
 GROUP BY
       A.WH_NO
     , A.PRD_ID
     , A.UNT_PRD_ID
HAVING 
       NVL(SUM(A.M_G_QTY), 0) - (NVL(SUM(A.I_G_QTY), 0) + NVL(SUM(A.H_G_QTY), 0)) <> 0 OR
       NVL(SUM(A.M_B_QTY), 0) - (NVL(SUM(A.I_B_QTY), 0) + NVL(SUM(A.H_B_QTY), 0)) <> 0
;
