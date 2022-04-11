<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%"
      height="250"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" fit="true" />
      <el-table-column fixed prop="title" label="货品" fit="true" />
      <el-table-column prop="skuName" label="sku属性" fit="true" />
      <el-table-column prop="skuCode" label="sku码" fit="true" />
      <el-table-column prop="costPrice" label="成本价" fit="true">
        <!-- 这个header用起来有问题,会卡住，先临时把单位放到下面
        <template slot="header" slot-scope="scope">
          成本价{{ scope.row.currency }}
        </template> -->
        <template slot-scope="scope">
          {{ scope.row.costPrice }}({{ scope.row.currency }})
        </template>
      </el-table-column>
      <el-table-column prop="size" label="尺寸（长*宽*高）" fit="true">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.length }}*{{ scope.row.width }}*{{ scope.row.height }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="weight" label="重量" fit="true" />
      <el-table-column label="配对状态" fit="true">
        <template slot-scope="scope">
          <span style="margin-left: 10px">
            <span v-if="scope.row.combinedScItem"> 是 </span>
            <span v-else>否</span>
          </span></template>
      </el-table-column>
      <el-table-column prop="gmtModified" label="更新时间" fit="true" />
      <el-table-column label="操作" fixed="right" fit="true" />
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 922080,
          loginId: 'syq534121271@gmail.com',
          title: '样例',
          skuCode: '7672838197248',
          currency: 'CNY',
          skuName: '白色,大',
          costPrice: 10.0,
          length: 10,
          width: 20,
          height: 30,
          weight: 1000.0,
          images: [
            'https://cdn1.keyouyun.com/389974/img/2022/d1ca912f5b0c8a5b28a6b42e38b17ea5.webp',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          skuImage:
            'https://cdn1.keyouyun.com/389974/img/2022/d1ca912f5b0c8a5b28a6b42e38b17ea5.webp',
          gmtCreate: '2022-04-11T14:43:25Z',
          gmtModified: '2022-04-11T14:43:25Z',
          scItemId: 2022041162248144,
          platform: -1,
          source: {
            code: 1,
            message: '手工新增'
          },
          type: 0,
          combinedScItem: false
        },
        {
          id: 922081,
          loginId: 'syq534121271@gmail.com',
          title: '样例',
          skuCode: '7672838197249',
          currency: 'CNY',
          skuName: '黑色,大',
          costPrice: 300.0,
          length: 10,
          width: 20,
          height: 30,
          weight: 1000.0,
          images: [
            'https://cdn1.keyouyun.com/389974/img/2022/d1ca912f5b0c8a5b28a6b42e38b17ea5.webp',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
          ],
          gmtCreate: '2022-04-11T14:43:25Z',
          gmtModified: '2022-04-11T14:43:25Z',
          scItemId: 2022041132341056,
          platform: -1,
          source: {
            code: 1,
            message: '手工新增'
          },
          type: 0,
          combinedScItem: true
        }
      ]
    }
  }
}
</script>
